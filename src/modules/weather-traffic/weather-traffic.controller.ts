import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { WeatherTrafficService } from './weather-traffic.service';

@ApiTags('weather-traffic')
@Controller('weather-traffic')
export class WeatherTrafficController {
  constructor(private weatherTrafficService: WeatherTrafficService) {}

  // @ApiOperation({ summary: 'API all pet type' })
  // @Get()
  // @HttpCode(200)
  // async getAll(@Query() query: GetPetTypeDto) {
  //   return this.petTypesService.getAll(query);
  // }
}
