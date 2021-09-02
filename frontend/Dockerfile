ARG NODE_VERSION
FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install


## Ressource pour installer un nouveau projet vue.js
# npm install -g @vue/cli
# vue create .
# vue upgrade