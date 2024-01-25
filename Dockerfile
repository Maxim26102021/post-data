FROM node:alpine as build
LABEL maintainer="maksim.shirokov2021@icloud.com"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build



FROM nginx:stable-alpine
COPY  --from=build /app/static /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


CMD ["nginx", "-g", "daemon off;"]