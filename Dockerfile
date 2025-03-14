# Use an official Node.js image as the base
FROM node:18-alpine AS build


# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the React app
RUN yarn build

# Debugging: Check if the dist directory exists
RUN echo "Checking if dist directory exists..." && ls -la /app/dist || echo "Dist directory not found!"

# Debug: Check if the build directory exists
RUN ls -la /app/dist

# Use Nginx for serving the production build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy the built files to Nginx's default directory
COPY --from=build /app/dist .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

