FROM node:20.11-alpine

WORKDIR /src

COPY . .

EXPOSE 3000

RUN npm i

RUN npm run build

CMD [ "npm", "start" ]