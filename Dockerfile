FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm rebuild bcrypt --build-from-source

CMD ["node", "server.js"]
