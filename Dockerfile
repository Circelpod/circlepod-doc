FROM yasuoyuhao/node-docker-image-with-tini:14.18.0-alpine3.14


RUN mkdir -p /api
WORKDIR /api

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build

CMD ["yarn", "start:prod"]