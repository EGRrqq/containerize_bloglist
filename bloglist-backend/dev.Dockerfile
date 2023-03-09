FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install

USER node

CMD [ "npm", "run", "dev" ]