#!/bin/sh

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER root WITH SUPERUSER PASSWORD 'password';
    CREATE DATABASE ft_transcendence_db;
    GRANT ALL PRIVILEGES ON DATABASE ft_transcendence_db TO root;
EOSQL


# psql --command "CREATE USER root WITH SUPERUSER PASSWORD 'password';"
# createdb -O root ft_transcendence_db