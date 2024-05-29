import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { DEFAULT_PERIOD } from 'src/constants';

export class GetMostSearchesPerformedDto {
  @ApiProperty({
    description: 'Start Date Time',
    type: Number,
    required: true,
    default: Date.now(),
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  startDateTime: number;

  @ApiProperty({
    description: 'End Date Time',
    type: Number,
    required: true,
    default: Date.now(),
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  endDateTime: number;

  @ApiProperty({
    description: 'End Date Time',
    type: Number,
    required: true,
    default: DEFAULT_PERIOD,
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  period: number;
}
