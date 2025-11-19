import cors from "cors";
import express, { Express, json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";
import corsOptions from "./config/corsOptions";
import credentials from "./middleware/credentials";
import { errorHandler } from "./middleware/error";
import { prisma } from "@repo/database";

const isProd = process.env.NODE_ENV === "production";

export const createServer = (): Express => {
  const app = express();

  // Security headers
  app.use(
    helmet({
      contentSecurityPolicy: isProd ? undefined : false,
    })
  );

  // Logging
  app.use(morgan(isProd ? "combined" : "dev"));

  // Body parsing
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Apply credentials middleware before CORS middleware
  app.use(credentials);

  // CORS
  app.use(cors(corsOptions));

  // API Routes
  app.get("/list", async (_, res) => {
    const list = await prisma.groceryList.findFirst({
      include: {
        items: {
          where: {
            deleted: false,
          },
        },
      },
    });
    res.json({
      list,
    });
  });

  app.post("/list", async (req, res) => {
    const { name, quantity = 1 } = req.body;

    // Get or create the default list
    const list = await prisma.groceryList.findFirst();

    // Add item to the list
    await prisma.groceryItem.create({
      data: {
        name,
        quantity,
        listId: list!.id,
      },
    });

    // Return the updated list with all items
    const updatedList = await prisma.groceryList.findUnique({
      where: { id: list!.id },
      include: {
        items: {
          where: {
            deleted: false,
          },
        },
      },
    });

    res.json({ list: updatedList });
  });

  app.put("/list/:id", async (req, res) => {
    const { id } = req.params;
    const { purchased, deleted } = req.body;
    const list = await prisma.groceryList.findFirst();

    // Build update data object with only provided fields
    const updateData: { purchased?: boolean; deleted?: boolean } = {};
    if (purchased !== undefined) updateData.purchased = purchased;
    if (deleted !== undefined) updateData.deleted = deleted;

    await prisma.groceryItem.update({
      where: { id },
      data: updateData,
    });

    const updatedList = await prisma.groceryList.findUnique({
      where: { id: list!.id },
      include: {
        items: {
          where: {
            deleted: false,
          },
        },
      },
    });

    res.json({ list: updatedList });
  });

  app.use((req, res) => {
    res.status(404).json({ error: "Route not found", path: req.originalUrl });
  });

  // Error handler
  app.use(errorHandler);

  return app;
};
