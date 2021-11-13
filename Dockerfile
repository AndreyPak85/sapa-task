FROM node:14-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm install -g serve

RUN npm run build

CMD serve -s build -l 3000