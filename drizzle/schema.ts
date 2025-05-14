import { pgTable, serial, integer, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const transactions = pgTable("transactions", {
	id: serial().primaryKey().notNull(),
	amount: integer().notNull(),
	category: varchar().notNull(),
	date: integer().notNull(),
	description: varchar().notNull(),
	type: varchar().notNull(),
});
