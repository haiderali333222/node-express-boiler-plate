FROM node:8.11.1
WORKDIR /webapp
COPY package*.json ./
RUN npm install
COPY . .
#CMD ["node", "bin/www"]
ENTRYPOINT nodemon bin/www
