FROM node:20-alpine

WORKDIR /app

COPY src/client/package*.json ./
RUN npm ci

COPY src/client/ .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]