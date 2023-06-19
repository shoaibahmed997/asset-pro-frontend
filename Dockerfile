# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /frontend
COPY . .
RUN yarn install 
CMD [ "yarn","dev" ]
EXPOSE 3000