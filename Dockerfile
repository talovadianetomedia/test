FROM node

WORKDIR /usr/src/app

COPY . .

EXPOSE 80

RUN npm install

CMD ["npm", "start"]