FROM node:20-alpine AS build

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5175

CMD ["npm", "run", "dev", "--", "--host", "--port", "5175"]
