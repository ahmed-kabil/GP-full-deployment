FROM nginx:latest
RUN mkdir -p /var/nginx/cache && chown -R nginx:nginx /var/nginx/cache
COPY nginx.conf /etc/nginx/conf.d/default
EXPOSE 80 443 
CMD ["nginx","-g","daemon off;"]