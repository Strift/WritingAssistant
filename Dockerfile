FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install pm2 to monitor the application
RUN npm install -g pm2

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Run command
CMD [ "pm2-docker", "start", "npm", "--", "start" ]