FROM ubuntu

RUN apt-get update
RUN apt-get install -y php
RUN mkdir -p /var/www

EXPOSE 8999

ENTRYPOINT php -S 0.0.0.0:8999 -t /var/www