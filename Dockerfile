# Pull the base image with Node.js
FROM node:14-alpine
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of your app's source code
COPY . .
# Expose port on the Docker container
EXPOSE 3000
# Start the app
CMD ["npm", "start"]