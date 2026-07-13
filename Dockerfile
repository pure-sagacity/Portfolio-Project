FROM oven/bun:1.1.34 AS development-dependencies-env
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM oven/bun:1.1.34 AS production-dependencies-env
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1.1.34 AS build-env
WORKDIR /app
COPY . ./
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
RUN bun run build

FROM oven/bun:1.1.34
WORKDIR /app
ENV NODE_ENV=production
COPY package.json bun.lock ./
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
EXPOSE 3000
CMD ["bun", "run", "start"]
