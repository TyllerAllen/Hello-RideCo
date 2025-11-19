.PHONY: docker-build docker-up docker-down docker-logs docker-clean docker-setup

# Build Docker images
docker-build:
	docker-compose build

# Start all services
docker-up:
	docker-compose up -d

# Stop all services
docker-down:
	docker-compose down

# View logs
docker-logs:
	docker-compose logs -f api

# View all logs
docker-logs-all:
	docker-compose logs -f

# Clean up containers and volumes
docker-clean:
	docker-compose down -v
	docker system prune -f

# Start everything (builds, sets up DB, and starts services)
docker-start: docker-build docker-up

# Restart API service
docker-restart-api:
	docker-compose restart api

