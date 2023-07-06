
FROM node:14-alpine as dependencies
WORKDIR /app
COPY package.json .
RUN npm install

FROM node:14-alpine as build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html