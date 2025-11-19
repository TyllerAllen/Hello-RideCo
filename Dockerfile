FROM node:20-alpine

# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./
COPY turbo.json ./

# Copy workspace package.json files
COPY apps/api/package.json ./apps/api/
COPY apps/native/package.json ./apps/native/
COPY packages/database/package.json ./packages/database/
COPY packages/ui/package.json ./packages/ui/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client
RUN yarn generate

# Copy and set permissions for entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose port
EXPOSE 4000

# Default command (can be overridden in docker-compose)
ENTRYPOINT ["docker-entrypoint.sh"]

