# Build stage
FROM node:20-alpine AS build-stage

# Set working directory
WORKDIR /app/otero_samir_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Skip prepare script during build (avoids husky error)
ENV HUSKY_SKIP_INSTALL=1

# Install dependencies (devDeps OK here because we skip husky)
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine AS production-stage

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built app from build stage
COPY --from=build-stage /app/otero_samir_ui_garden_build_checks/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
