FROM node:8-alpine

COPY server.js .
COPY package.json .
COPY yarn.lock .

RUN yarn

CMD ["node", "server.js"]
