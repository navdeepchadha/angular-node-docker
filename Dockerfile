FROM node:14.15.0 AS ui-build
WORKDIR /app
COPY ["client/", "./"]
RUN npm install @angular/cli && npm install && npm run build

FROM node:14.15.0 AS server-build
WORKDIR /app
COPY --from=ui-build /app/dist/lotr ./lotr
COPY ["/server/package.json", "/server/package-lock.json*", "./"]
RUN npm install --production
COPY ["/server","./"]

CMD [ "node", "./dist/server.js" ]