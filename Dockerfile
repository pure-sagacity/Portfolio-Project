FROM oven/bun:1.3.13-debian AS base
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS dependencies-env
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM node:22-bullseye-slim AS build-env
WORKDIR /app
COPY --from=dependencies-env /app/node_modules ./node_modules
COPY . .
RUN node node_modules/.bin/react-router build   # runs the CLI with Node

FROM base AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY package.json bun.lock ./
COPY --from=dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build ./build
EXPOSE 3000
CMD ["bun", "run", "start"]
