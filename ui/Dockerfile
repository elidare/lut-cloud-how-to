FROM oven/bun:1.2.3
WORKDIR /usr/src/app
COPY package*.json .
RUN bun install
COPY . .
CMD ["bun", "dev"]