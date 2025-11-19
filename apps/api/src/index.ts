import dotenv from "dotenv";
import { createServer } from "./server";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Create Express server
const app = createServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error("Server error:", err);
    process.exit(1);
  }
});

// Handle uncaught errors
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});
