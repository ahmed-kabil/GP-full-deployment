FROM node:alpine3.22 AS builder
WORKDIR /build_app
COPY ./package.json .
RUN npm install
COPY . .
ENV VITE_BACKEND_URL="https://hospital.ahmedkabil.me"
RUN npm run build
FROM nginx:latest
WORKDIR /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build_app/dist /app
RUN chmod -R +r assets/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]