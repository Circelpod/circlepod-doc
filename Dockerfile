FROM yasuoyuhao/node-docker-image-with-tini:14.16.1-alpine3.11


RUN mkdir -p /api
WORKDIR /api

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build

CMD ["yarn", "start:prod"]