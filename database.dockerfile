FROM postgres:14.1-alpine
ENV POSTGRES_USER root
ENV POSTGRES_PASSWORD root
ENV POSTGRES_DB dbteste
ENV POSTGRES_HOST 127.0.0.1
COPY ./database/dbteste.sql /docker-entrypoint-initdb.d/