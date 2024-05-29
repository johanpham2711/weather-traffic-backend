import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class BaseQueryDto {
  @ApiProperty({ name: 'page', type: Number, required: false, example: 1 })
  @IsOptional()
  @IsNumberString()
  page?: number;

  @ApiProperty({ name: 'limit', type: Number, required: false, example: 10 })
  @IsOptional()
  @IsNumberString()
  limit?: number;
}
