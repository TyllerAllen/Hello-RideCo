import { prisma } from "./client";
import "dotenv/config";

const seed = async () => {
  try {
    const list = await prisma.groceryList.create({
      data: {
        name: "Groceries",
        items: {
          create: [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }],
        },
      },
    });
    console.log(list);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
