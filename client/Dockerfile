
FROM node:20

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=5173

EXPOSE 5173

CMD [ "npm", "run", "dev" ]

