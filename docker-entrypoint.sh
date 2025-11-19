#!/bin/sh

echo "Starting API service setup..."

# Ensure database directory exists
mkdir -p /app/packages/database/prisma

# Set DATABASE_URL for Prisma commands
export DATABASE_URL="file:/app/packages/database/prisma/dev.db"

# Generate Prisma client
echo "Generating Prisma client..."
yarn generate || {
  echo "Error: Prisma client generation failed"
  exit 1
}

# Push database schema (create tables if they don't exist)
echo "Pushing database schema..."
cd /app/packages/database
if ! yarn db:push --accept-data-loss; then
  echo "Error: Database push failed"
  exit 1
fi
cd /app

# Seed the database
echo "Seeding database..."
cd /app/packages/database
DATABASE_URL="file:/app/packages/database/prisma/dev.db" npx tsx src/seed.ts || {
  echo "Warning: Database seeding failed (this is OK if database already has data)"
}
cd /app

# Start the API server
echo "Starting API server..."
exec yarn workspace api dev

