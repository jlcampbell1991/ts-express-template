FROM node:14.15.1
ENV NODE_ENV=production
WORKDIR /src
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD ["npm", "run", "prod"]