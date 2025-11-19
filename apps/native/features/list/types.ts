import { z } from "zod";

export const GroceryItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  purchased: z.boolean(),
});

export const GroceryListSchema = z.object({
  id: z.string(),
  name: z.string(),
  items: z.array(GroceryItemSchema),
});

export type GroceryItem = z.infer<typeof GroceryItemSchema>;
export type GroceryList = z.infer<typeof GroceryListSchema>;
