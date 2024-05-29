/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { thirdPartyApi } from 'src/configs';
import { ITrafficImagesResponse, IWeatherForecastsResponse } from 'src/interfaces';

export const fetchTrafficImages = async (dateTime: string): Promise<ITrafficImagesResponse> => {
  try {
    const response = await axios.get(thirdPartyApi.trafficImagesApiUrl, {
      params: {
        date_time: dateTime,
      },
    });
    return response.data as ITrafficImagesResponse;
  } catch (error) {
    console.error('Error fetching traffic images:', error);
    throw error;
  }
};

export const fetchWeatherForecast = async (dateTime: string): Promise<IWeatherForecastsResponse> => {
  try {
    const response = await axios.get(thirdPartyApi.weatherForecastApiUrl, {
      params: {
        date_time: dateTime,
      },
    });
    return response.data as IWeatherForecastsResponse;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};
