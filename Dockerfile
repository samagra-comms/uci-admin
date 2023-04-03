FROM node:16-alpine as dependencies
WORKDIR /app
COPY package.json . 
RUN npm install --legacy-peer-deps

FROM node:16-alpine as build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npx ng build --prod

EXPOSE 4200

FROM nginx:alpine
COPY --from=build /app/dist/ui-uci /usr/share/nginx/html
