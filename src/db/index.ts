import pg, { Pool, PoolConfig, QueryConfig } from "pg";

class AppPool {
  #pool: Pool | null = null;

  connect(options?: PoolConfig) {
    this.#pool = new pg.Pool(options);
  }

  close() {
    if (this.#pool) {
      return this.#pool.end();
    } else {
      this.error();
    }
  }

  query(sql: string | QueryConfig, params: any) {
    if (this.#pool) {
      return this.#pool.query(sql, params);
    } else {
      this.error();
    }
  }

  error() {
    throw new Error(
      "There is no existing pool. Ensure that you have called '.connect()' first"
    );
  }
}

const pool = new AppPool();

export default pool;
