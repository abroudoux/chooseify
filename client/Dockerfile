
FROM node:20

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=4000

EXPOSE 4000

CMD [ "npm", "run", "dev" ]

