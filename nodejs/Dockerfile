ARG NODE_VERSION
FROM node:${NODE_VERSION}

# WORKDIR /usr/src/app

COPY package*.json ./

# RUN cd /usr/src/app

RUN npm install

# RUN chown root:root /etc/mysql/my.cnf

# RUN mkdir -p /tmp/
# COPY secure_safran_dev.sql /tmp/
# COPY mysql_init.sh /usr/local/bin/

# CMD ["mysql_init.sh"]