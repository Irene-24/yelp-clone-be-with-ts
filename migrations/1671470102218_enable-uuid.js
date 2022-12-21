export const shorthands = undefined;

export function up(pgm) {
  pgm.sql(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
 `);
}
