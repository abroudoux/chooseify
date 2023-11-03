
FROM node:20

WORKDIR /api

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=4050

EXPOSE 4050

CMD [ "npm", "run", "dev" ]

