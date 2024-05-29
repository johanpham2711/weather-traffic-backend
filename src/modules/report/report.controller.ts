import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateReportDto, GetMostSearchesPerformedDto, GetRecentSearchesDto, GetTopPeriodSearchesDto } from './dtos';
import { ReportService } from './report.service';

@ApiTags('report')
@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @ApiOperation({ summary: 'API create report' })
  @ApiBody({
    type: CreateReportDto,
    required: true,
    description: 'Create report',
  })
  @Post()
  @HttpCode(201)
  async create(@Body() payload: CreateReportDto) {
    return this.reportService.createReport(payload);
  }

  @ApiOperation({ summary: 'API get recent searches' })
  @Get('/recent')
  @HttpCode(200)
  async getRecentSearches(@Query() query: GetRecentSearchesDto) {
    return this.reportService.getRecentSearches(query);
  }

  @ApiOperation({ summary: 'API get top period searches' })
  @Get('/top-period')
  @HttpCode(200)
  async getTopPeriodSearches(@Query() query: GetTopPeriodSearchesDto) {
    return this.reportService.getTopPeriodSearches(query);
  }

  @ApiOperation({ summary: 'API get most searches performed' })
  @Get('/most-searched')
  @HttpCode(200)
  async getMostSearchesPerformed(@Query() query: GetMostSearchesPerformedDto) {
    return this.reportService.getMostSearchesPerformed(query);
  }
}
