import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { CACHE_KEYS, DEFAULT_PERIOD, LIMIT, REPORT_MESSAGE } from 'src/constants';
import { Report } from 'src/database';
import { ErrorHelper } from 'src/utils';

import { RedisService } from '../redis';

import { CreateReportDto, GetMostSearchesPerformedDto, GetRecentSearchesDto, GetTopPeriodSearchesDto } from './dtos';
import { ReportRepository } from './report.repository';

@Injectable()
export class ReportService {
  constructor(private readonly reportRepository: ReportRepository, private readonly redisService: RedisService) {}

  async createReport(data: CreateReportDto): Promise<Report> {
    return this.reportRepository.create(data);
  }

  async getRecentSearches(query: GetRecentSearchesDto): Promise<Report[]> {
    try {
      const { limit = LIMIT } = query;

      return this.reportRepository.find({
        order: [['createdAt', 'DESC']],
        limit,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getTopPeriodSearches(query: GetTopPeriodSearchesDto): Promise<Report[]> {
    const { startDateTime, endDateTime, limit = LIMIT } = query;
    if (startDateTime > endDateTime) ErrorHelper.BadRequestException(REPORT_MESSAGE.START_END_DATE_INVALID);

    return this.reportRepository.find({
      where: {
        createdAt: {
          [Op.between]: [new Date(startDateTime), new Date(endDateTime)],
        },
      },
      order: [['time', 'DESC']],
      limit,
    });
  }

  async getMostSearchesPerformed(query: GetMostSearchesPerformedDto): Promise<Date> {
    const cacheData = await this.redisService.get(`${CACHE_KEYS.MOST_SEARCH_PERFORMED}:${JSON.stringify(query)}`);
    if (cacheData) {
      return JSON.parse(cacheData);
    }
    const { startDateTime, endDateTime, period = DEFAULT_PERIOD } = query;
    if (startDateTime > endDateTime) ErrorHelper.BadRequestException(REPORT_MESSAGE.START_END_DATE_INVALID);

    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);

    const reports = await this.reportRepository.find({
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
      order: [['time', 'ASC']],
    });

    if (reports.length === 0) return null;

    const handledReports = reports.map((report) => {
      const reportDate = new Date(report.time);
      const periodDate = new Date(reportDate.getTime() + period);

      const periodReports = reports.filter((r) => {
        const rDate = new Date(r.time);
        return rDate >= reportDate && rDate <= periodDate;
      });

      return {
        report,
        count: periodReports.length,
      };
    });
    handledReports.sort((a, b) => b.count - a.count);

    await this.redisService.setExpire(
      `${CACHE_KEYS.MOST_SEARCH_PERFORMED}:${JSON.stringify(query)}`,
      JSON.stringify(handledReports[0].report.time),
    );

    return handledReports[0].report.time;
  }
}
