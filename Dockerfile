FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:alpine AS production
WORKDIR /app
COPY --from=builder /app .
EXPOSE 80

CMD ["node", "index.js"]
