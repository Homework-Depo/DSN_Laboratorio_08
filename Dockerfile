FROM node:20-alpine3.16

WORKDIR /app

COPY package*.json ./

COPY . .

RUN apk update && apk upgrade

CMD [ "npm", "run", "start" ]

EXPOSE 3000