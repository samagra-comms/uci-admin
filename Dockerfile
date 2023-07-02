
FROM node:14-alpine as dependencies
WORKDIR /app
COPY package.json .
RUN npm install

FROM node:14-alpine as build
# These vars will be sourced during build time
ARG NG_APP_url
ARG NG_APP_nl_url
ARG NG_APP_nl_login_url
ARG NG_APP_nl_login_token
ARG NG_APP_nl_application_id
ARG NG_APP_blobUrl
ARG NG_APP_botPhoneNumber
ARG NG_APP_adapterId
ARG NG_APP_broadcastAdapterId
ARG NG_APP_userId
ARG NG_APP_orgId
ARG NG_APP_token
ENV NG_APP_url $NG_APP_url
ENV NG_APP_nl_url $NG_APP_nl_url
ENV NG_APP_nl_login_url $NG_APP_nl_login_url
ENV NG_APP_nl_login_token $NG_APP_nl_login_token
ENV NG_APP_nl_application_id $NG_APP_nl_application_id
ENV NG_APP_blobUrl $NG_APP_blobUrl
ENV NG_APP_botPhoneNumber $NG_APP_botPhoneNumber
ENV NG_APP_adapterId $NG_APP_adapterId
ENV NG_APP_broadcastAdapterId $NG_APP_broadcastAdapterId
ENV NG_APP_userId $NG_APP_userId
ENV NG_APP_orgId $NG_APP_orgId
ENV NG_APP_token $NG_APP_token
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html