
FROM node:20

WORKDIR /api

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD [ "npm", "run", "dev" ]

