FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]