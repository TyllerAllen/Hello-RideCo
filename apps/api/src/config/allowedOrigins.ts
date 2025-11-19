// Load the string from the environment variable, ensuring it's a non-empty string
const allowedOriginsString: string = process.env.ALLOWED_ORIGINS ?? "";

// Split the string into an array using the comma as a delimiter and trim white spaces
const envOrigins: string[] = allowedOriginsString
  .split(",")
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0);

// Default development origins if none are specified
const defaultOrigins = [
  "http://localhost:3000",
  "http://localhost:19006",
  "http://localhost:8081",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:19006",
  "http://127.0.0.1:8081",
];

const allowedOrigins: string[] = envOrigins.length > 0 ? envOrigins : defaultOrigins;

export default allowedOrigins;
