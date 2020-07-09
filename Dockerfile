# stage 1 

FROM node as BUILDER

WORKDIR /usr/src/app

COPY . .

RUN  npm install --silent
RUN npm run build

# stage 2

FROM node

WORKDIR /app

COPY package.json /app
COPY --from=BUILDER /usr/src/app/app.js /app

RUN  npm install --silent --only=production

CMD node app.js
