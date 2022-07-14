FROM node:16.3.0

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000

CMD [ "npm", "run", "start" ]