FROM node:15 as build-stage

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.19.5-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf