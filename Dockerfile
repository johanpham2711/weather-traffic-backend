FROM node:18-alpine AS development

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

ENV PATH=/app/node_modules/.bin:$PATH

COPY . .

EXPOSE 8080

CMD ["yarn", "start:dev"]

