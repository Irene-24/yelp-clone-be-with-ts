import { QueryResult } from "pg";
import format from "pg-format";
import config from "@src/config";

import pool from "@src/db/index";

type Res = QueryResult<{ rows: any; count: string }>;

class RestaurantRepo {
  static async getAll(limit?: number) {
    const { rows } = (await pool.query(
      format(
        "SELECT * FROM %I %s %L",
        "restaurants",
        "LIMIT",
        limit || config.pageSize
      )
    )) as Res;

    return rows;
  }

  static async getById(id: string) {
    const { rows } = (await pool.query(
      "SELECT * FROM restaurants WHERE id = $1 LIMIT 1;",
      [id]
    )) as Res;

    return rows[0];
  }

  static async insert(name: string, price: number, location: string) {
    const { rows } = (await pool.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2. $3) RETURNING *;",
      [name, location, price]
    )) as Res;

    return rows[0];
  }

  static async deleteById(id: string) {
    const { rows } = (await pool.query(
      "DELETE FROM * FROM restaurants WHERE id = $1 RETURNING *;",
      [id]
    )) as Res;

    return rows[0];
  }

  static async update(
    id: string,
    name: string,
    price: number,
    location: string
  ) {
    const { rows } = (await pool.query(
      "UPDATE restaurants SET name = $1, price_range = $2, location = $3, updateAt = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *;",
      [name, price, location, id]
    )) as Res;

    return rows[0];
  }

  static async count() {
    const { rows } = (await pool.query(
      "SELECT COUNT(*) FROM restaurants;"
    )) as Res;

    return parseInt(rows[0].count);
  }
}

export default RestaurantRepo;
