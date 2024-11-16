# Use a simple web server to serve static files
FROM nginx:alpine

# Copy static files to the web server's directory
COPY . /usr/share/nginx/html

# Expose the port on which the server will run
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
