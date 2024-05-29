import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseRepository, Report } from 'src/database';

@Injectable()
export class ReportRepository extends BaseRepository<Report> {
  constructor(@InjectModel(Report) readonly model: typeof Report) {
    super(model);
  }
}
