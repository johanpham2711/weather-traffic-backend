import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class GetLocationDto {
  @ApiProperty({
    description: 'Date time',
    type: Date,
    required: true,
    default: new Date(),
  })
  @IsDateString()
  @IsNotEmpty()
  dateTime: string;
}
