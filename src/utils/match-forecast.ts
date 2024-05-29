import { EForecast } from 'src/enums';
import { IForecast } from 'src/interfaces';

export const matchForecastWeather = (forecasts: IForecast[], location: string): EForecast => {
  const forecast = forecasts.find((forecast) => forecast.area === location);
  return forecast ? forecast.forecast : EForecast.NO_DATA;
};
