ARG POSTGRES_VERSION
FROM postgres:${POSTGRES_VERSION}


COPY entrypoint.sh /docker-entrypoint-initdb.d
# RUN chmod +x /docker-entrypoint-initdb.d/entrypoint.sh

# USER postgres
# CMD ["entrypoint.sh"]