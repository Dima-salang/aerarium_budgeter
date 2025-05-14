CREATE TABLE "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" integer NOT NULL,
	"category" varchar NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"description" varchar NOT NULL,
	"type" varchar NOT NULL
);
