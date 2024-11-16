# Stage 1: Build Stage
FROM node:16 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application files
COPY . .

# Build the application (if needed)
# RUN npm run build

# Stage 2: Production Stage
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app .

# Expose the API port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
