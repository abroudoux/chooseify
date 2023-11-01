
FROM node:20

WORKDIR /app/server

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]
