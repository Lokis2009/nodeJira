FROM node:8
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install

ADD ./ /app
EXPOSE 3000 3000
CMD ["npm", "start"]

