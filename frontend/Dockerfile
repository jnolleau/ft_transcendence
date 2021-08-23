ARG NODE_VERSION
FROM node:${NODE_VERSION}

WORKDIR /usr/src/app
# RUN npm install -g @vue/cli
# RUN vue create my-app --default
COPY package*.json ./

RUN npm install
