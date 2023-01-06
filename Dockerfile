FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run bundle

FROM mhart/alpine-node
RUN yarn install -g serve
WORKDIR /app
COPY --from=builder /app/public .
CMD ["serve", "-p", "8080", "-s", "."]