import { GroceryListSchema } from "./types";

export const retrieveList = async () => {
  try {
    const response = await fetch("http://localhost:4000/list");
    if (!response.ok) {
      throw new Error("Failed to retrieve list");
    }
    const data = await response.json();
    console.log(data);
    const list = GroceryListSchema.parse(data.list);
    return list;
  } catch (error) {
    console.error(error);
    return null;
  }
};
