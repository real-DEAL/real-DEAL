FROM node
RUN mkdir -p /app
COPY . /app
WORKDIR /app
COPY package.json /app
RUN npm install
CMD sudo pm2-docker app.js
