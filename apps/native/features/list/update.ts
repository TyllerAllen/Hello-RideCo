import { GroceryListSchema } from "./types";

type UpdateItemParams = {
  id: string;
  purchased?: boolean;
  deleted?: boolean;
};

export const updateItem = async ({
  id,
  purchased,
  deleted,
}: UpdateItemParams) => {
  try {
    const response = await fetch(`http://localhost:4000/list/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, purchased, deleted }),
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
