import { pgTable, integer, varchar, serial, timestamp} from "drizzle-orm/pg-core";

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  category: varchar("category").notNull(),
  date: timestamp("date", {withTimezone: false, mode: "date"}).notNull().defaultNow(),
  description: varchar("description").notNull(),
  type: varchar("type").notNull(),
});