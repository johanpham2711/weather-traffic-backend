import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';
import { ITrafficImagesWithName } from 'src/interfaces';

export class CreateReportDto {
  @ApiProperty({
    description: 'Time',
    type: Date,
    required: true,
    default: new Date(),
  })
  @IsDateString()
  @IsNotEmpty()
  time: string;

  @ApiProperty({
    description: 'Location',
    type: Object,
    required: true,
  })
  @IsNotEmpty()
  location: ITrafficImagesWithName;
}
