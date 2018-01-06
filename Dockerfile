FROM node

LABEL maintainer "mathias talbo"

RUN mkdir -p /app

WORKDIR /app

COPY hello-node-app/* /app/

EXPOSE 8000

CMD [ "npm", "start" ]