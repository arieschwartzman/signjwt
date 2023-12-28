# Use an official Node.js LTS runtime as the base image
FROM node:lts

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the Docker image
COPY package*.json ./

# Install the application dependencies in the Docker image
RUN npm install

# Copy the rest of the application to the Docker image
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD [ "node", "dist/app.js" ]