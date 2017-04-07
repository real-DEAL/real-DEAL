FROM node
RUN mkdir -p /app
COPY . /app
WORKDIR /app
COPY package.json /app
RUN npm install

EXPOSE 80
EXPOSE 443

CMD npm start
