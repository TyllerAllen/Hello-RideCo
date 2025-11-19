import { GroceryListSchema } from "./types";

type AddItemParams = {
  name: string;
};

export const addItem = async ({ name }: AddItemParams) => {
  try {
    const response = await fetch("http://localhost:4000/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();
    console.log(data);
    const list = GroceryListSchema.parse(data.list);
    return list;
  } catch (error) {
    console.error(error);
    return null;
  }
};
