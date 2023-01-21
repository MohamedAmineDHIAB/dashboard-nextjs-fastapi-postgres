# docker file for next.js frontend app
FROM node:latest
WORKDIR /app/client
COPY ./client/package.json ./
RUN yarn install
COPY ./client/ .
RUN yarn build

