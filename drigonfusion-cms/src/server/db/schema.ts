// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  numeric,
  text,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `drigonfusion-cdn_${name}`);

export const files = createTable(
  "file",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    format: varchar("format", { length: 256 }),
    size: numeric("size"),
    use: varchar("use", { length: 256 }),
  },
  (table) => ({
    nameIndex: index("files_name_idx").on(table.name),
    useIndex: index("files_use_idx").on(table.use),
    formatIndex: index("files_format_idx").on(table.format),
  })
);

export const blogPosts = createTable(
  "blog_post",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 128 }),
    description: varchar("description", { length: 256 }),
    content: text("content"),
    banner: varchar("banner", { length: 256 }),
    authors: varchar("authors", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  }, 
  (table) => ({
    titleIndex: index("blogPosts_title_idx").on(table.title),
  })
);

export const newsPosts = createTable(
  "news_post",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 128 }),
    description: varchar("description", { length: 256 }),
    content: text("content"),
    banner: varchar("banner", { length: 256 }),
    authors: varchar("authors", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  }, 
  (table) => ({
    titleIndex: index("newsPosts_title_idx").on(table.title),
  })
);

export const gamingPosts = createTable(
  "gaming_post",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 128 }),
    description: varchar("description", { length: 256 }),
    content: text("content"),
    banner: varchar("banner", { length: 256 }),
    authors: varchar("authors", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  }, 
  (table) => ({
    titleIndex: index("gamingPosts_title_idx").on(table.title),
  })
);