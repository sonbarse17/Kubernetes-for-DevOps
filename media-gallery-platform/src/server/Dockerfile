FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY src/server/package*.json ./server/
RUN npm install
RUN cd server && npm ci

COPY src/server/ ./server/
COPY src/types/ ./types/
COPY tsconfig.json ./
RUN npm run build:server

RUN mkdir -p uploads
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 5000

CMD ["npm", "start"]