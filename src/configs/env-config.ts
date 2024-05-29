import * as dotenv from 'dotenv';
dotenv.config();

export const application = {
  environment: process.env.ENVIRONMENT || 'local',
  urlPrefix: process.env.URL_PREFIX || '/api',
  serverPort: +process.env.SERVER_PORT || 8080,
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',
};

export const redis = {
  host: process.env.REDIS_HOST || 'localhost',
  port: +process.env.REDIS_PORT || 6379,
  keyPrefix: process.env.PREFIX_KEY || '',
  password: process.env.REDIS_PASSWORD || '',
  db: +process.env.REDIS_DB || 0,
};

export const postgresql = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USERNAME || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: process.env.POSTGRES_DATABASE || 'base',
};

export const thirdPartyApi = {
  trafficImagesApiUrl: process.env.TRAFFIC_IMAGES_API_URL || '',
  weatherForecastApiUrl: process.env.WEATHER_FORECAST_API_URL || '',
};
