export const shorthands = undefined;

export function up(pgm) {
  pgm.sql(`
    CREATE TABLE restaurants (
    id uuid DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    price_range INT NOT NULL DEFAULT 5 
	  CHECK(price_range >=1 AND price_range <= 5),
    location VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id) 
);
 `);
}

// export function down(pgm) {
//     pgm.dropTable("restaurants")
// }
