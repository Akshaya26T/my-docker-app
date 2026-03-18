 
# Use lightweight Node.js runtime
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy package.json and package-lock.json first for better caching
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose port and set environment
EXPOSE 3000
ENV NODE_ENV=production

# Start the app
CMD ["node", "app.js"]
