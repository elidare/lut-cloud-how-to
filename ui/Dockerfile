FROM oven/bun:1.2.5
WORKDIR /usr/src/app
COPY package*.json .
RUN bun install
COPY . .
CMD ["bun", "dev"]