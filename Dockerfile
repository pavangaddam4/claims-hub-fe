FROM httpd:alpine
MAINTAINER Pavan Gaddam <pavan.gaddam@stateauto.com>
RUN rm -r /usr/local/apache2/htdocs/*
COPY build /usr/local/apache2/htdocs/