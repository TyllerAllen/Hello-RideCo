# Hello Rideco - Grocery List App

A simple grocery list application built with React Native (Expo) and Express.

## What's Included

This project contains:

- **Mobile App** (`apps/native`): A React Native app built with Expo that runs on iOS, Android, and web
- **API Server** (`apps/api`): An Express.js backend server that stores and manages your grocery lists
- **Shared Packages**: Reusable code shared between the app and API

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

### For Running the API with Docker:
- **Docker Desktop** - Download from [docker.com](https://www.docker.com/products/docker-desktop/)
  - This allows you to run the backend server without installing Node.js directly

### For Running the Mobile App:
- **Node.js** (version 20.19.4 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **Yarn** package manager - Install with: `npm install -g yarn`
- **Expo Go app** (optional, for testing on your phone):
  - iOS: Download from the App Store
  - Android: Download from Google Play Store

## Quick Start Guide

### Step 1: Start the Backend API (Using Docker)

The backend API stores your grocery lists. The easiest way to run it is using Docker.

#### Option A: Using Make Commands (Easiest)

If you have `make` installed on your computer:

```bash
# Start everything (builds, sets up database, and starts the server)
make docker-start

# View what's happening
make docker-logs

# Stop the server when you're done
make docker-down
```

#### Option B: Using Docker Compose Directly

If you don't have `make`, use these commands:

```bash
# Build and start the API server
docker-compose up -d

# View the logs to see if it's working
docker-compose logs -f api

# Stop the server
docker-compose down
```

**What happens:**
- Docker will download and set up everything needed to run the API
- The database will be created automatically
- Sample data (a grocery list with 3 items) will be added
- The API will be available at **http://localhost:4000**

**How to check if it's working:**
- Open your web browser and go to: `http://localhost:4000/list`
- You should see a JSON response with grocery list data

### Step 2: Start the Mobile App

Once the API is running, you can start the mobile app.

1. **Open a new terminal window** (keep Docker running in the first one)

2. **Navigate to the project folder:**
   ```bash
   cd /path/to/hello-rideco
   ```

3. **Install dependencies** (only needed the first time):
   ```bash
   yarn install
   ```

4. **Start the Expo development server:**
   ```bash
   cd apps/native
   yarn start
   ```

5. **Choose how to view the app:**
   - **On your phone**: Scan the QR code with Expo Go app
   - **In a web browser**: Press `w` to open in your browser
   - **iOS Simulator**: Press `i` (requires Xcode on Mac)
   - **Android Emulator**: Press `a` (requires Android Studio)

**The app will connect to the API at `http://localhost:4000`**

## Project Structure

```
hello-rideco/
├── apps/
│   ├── api/          # Backend API server (Express)
│   └── native/       # Mobile app (React Native/Expo)
├── packages/
│   ├── database/     # Database setup and Prisma client
│   └── ui/           # Shared UI components
└── docker-compose.yml # Docker configuration
```

## Learn More

For more information about the technology choices, future improvements, and design decisions, see [DISCUSSION.md](./DISCUSSION.md).
