import { pgTable, integer, varchar, serial, timestamp} from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const categories = pgTable("categories", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    user_id: integer("user_id").references(() => users.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    color: varchar("color"),
    icon: varchar("icon"),
});

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  user_id: integer("user_id").references(() => users.id),
  category_id: integer("category_id").references(() => categories.id),
  date: timestamp("date", {withTimezone: false, mode: "date"}).notNull().defaultNow(),
  description: varchar("description").notNull(),
  type: varchar("type").notNull(),
});