import {drizzle} from "drizzle-orm/neon-http";
import {eq} from "drizzle-orm";
import {users, categories, transactions} from "./schema";
import 'dotenv/config';
import {neon} from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({client: sql});

// create table
async function main() {
    await db.insert(users).values({
        createdAt: new Date(),
    });

    await db.insert(categories).values({
        name: "test",
        user_id: 1,
        createdAt: new Date(),
        color: "test",
        icon: "test",
    });

    await db.insert(transactions).values({
        amount: 100,
        category_id: 1,
        user_id: 1,
        date: new Date(),
        description: "test",
        type: "test",
    });
    const result = await db.select().from(transactions).where(eq(transactions.id, 1));
    console.log(result);

}
main();