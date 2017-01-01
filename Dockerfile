FROM node:6

WORKDIR /code

RUN npm install

CMD npm start
