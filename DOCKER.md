# Docker Setup

This monorepo includes Docker Compose configuration to run the entire stack locally.

## Prerequisites

- Docker Desktop (or Docker Engine + Docker Compose)
- At least 4GB of available RAM

## Quick Start

### Using Make (Recommended)

```bash
# Build, setup database, and start all services
make docker-start

# View API logs
make docker-logs

# Stop all services
make docker-down

# Clean up everything (containers, volumes)
make docker-clean
```

### Using Docker Compose Directly

```bash
# Build images
docker-compose build

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f api

# Stop services
docker-compose down
```

## Services

### API Service
- **Port**: 4000
- **Container**: `hello-rideco-api`
- **Command**: `yarn workspace api dev`
- **Hot Reload**: Enabled via volume mounts
- **URL**: http://localhost:4000

## Environment Variables

Default environment variables are set in `docker-compose.yml`. To override them:

1. Copy `docker-compose.override.yml.example` to `docker-compose.override.yml`
2. Add your custom environment variables

Or set them directly in `docker-compose.yml`.

## Volumes

- **Source code**: Mounted for hot reload during development
- **Database**: Persisted in Docker volume `database-data`
- **Node modules**: Excluded from volume mounts for performance

## Database

The database file is stored in a Docker volume and persists between container restarts. To reset the database:

```bash
make docker-clean
make docker-start
```

## Troubleshooting

### Port Already in Use
If port 4000 is already in use, change it in `docker-compose.yml`:
```yaml
ports:
  - "4001:4000"  # Change 4001 to any available port
```

### Database Issues
If you encounter database errors:
1. Stop containers: `docker-compose down`
2. Remove volumes: `docker volume rm hello-rideco_database-data`
3. Restart: `make docker-start`

### Node Modules Issues
If you see module not found errors:
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Development Workflow

1. Start services: `make docker-start`
2. Make code changes (hot reload enabled)
3. View logs: `make docker-logs`
4. Stop when done: `make docker-down`

## Production

For production deployments, you'll want to:
- Use a production Dockerfile (multi-stage build)
- Set `NODE_ENV=production`
- Use environment-specific configuration
- Consider using PostgreSQL instead of SQLite for better performance

