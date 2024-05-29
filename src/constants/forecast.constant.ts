import { EForecast } from 'src/enums';

export const Forecast: Record<EForecast, string> = {
  [EForecast.SUNNY]: '☀️',
  [EForecast.CLOUDY]: '☁️',
  [EForecast.PARTLY_CLOUDY]: '⛅',
  [EForecast.PARTLY_CLOUDY_DAY]: '⛅',
  [EForecast.PARTLY_CLOUDY_NIGHT]: '🌫️',
  [EForecast.FAIR_DAY]: '🌤️',
  [EForecast.FAIR_NIGHT]: '🌙',
  [EForecast.NO_DATA]: 'No Data',
  // Add more mappings here
};
