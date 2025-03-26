# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first (for caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Expose port 3000 for development mode
EXPOSE 5173

# Enable polling to detect file changes
ENV CHOKIDAR_USEPOLLING=true
ENV VITE_HMR_PORT=5173  
# Ensure Hot Module Replacement (HMR) works

# Start the React development server
CMD ["yarn", "dev","--host"]
