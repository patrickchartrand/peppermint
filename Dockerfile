FROM node:16.17.0-slim as builder
WORKDIR /app
ENV NODE_ENV=development
ADD . ./
COPY .env.prod ./.env
RUN yarn install
RUN yarn run build
RUN rm -R node_modules/

FROM node:16.17.0-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder ./app/. ./
RUN yarn install --production
EXPOSE 3000
CMD ["yarn", "start"]