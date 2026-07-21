FROM node:26-alpine3.23 AS base

FROM base AS dependencies-env
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS build-env
WORKDIR /app
COPY . ./
COPY --from=dependencies-env /app/node_modules /app/node_modules
RUN npm run build

FROM base
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
COPY --from=dependencies-env /app/node_modules /app/node_modules
RUN npm prune --omit=dev
COPY --from=build-env /app/build /app/build
EXPOSE 3000
CMD ["npm", "run", "start"]
