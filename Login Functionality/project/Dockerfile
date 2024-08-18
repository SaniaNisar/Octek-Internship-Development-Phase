# Use an official Node.js runtime as a parent image
FROM node:20.15-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json 
COPY package*.json ./

# Install dependencies
RUN npm install

# Install sequelize-cli globally
RUN npm install -g sequelize-cli

# Copying necessary files
COPY .sequelizerc ./
COPY babel.config.json ./
COPY eslint.config.js ./
COPY winston.js ./
COPY nodemon.json ./
COPY src/ ./src/
COPY tests/ ./tests/

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD [ "npm", "run", "dev" ]
