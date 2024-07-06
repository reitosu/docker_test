FROM nginx:latest AS builder

WORKDIR /etc/nginx

# RUN apt install openssl && \
#     mkdir /etc/nginx/ssl && \
#     openssl genrsa -out /etc/nginx/ssl/server.key 2048 && \
#     cat ssls.txt | openssl req -new -key /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.csr
    

COPY ./docker/nginx/nginx.conf nginx.conf
COPY ./docker/nginx/start.sh /

CMD [ "/start.sh" ]