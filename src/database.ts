import {PoolConnection, createPool, Pool} from 'mysql2/promise';
import {database} from './config';
import {AppError} from './helpers/reportError';
const pool: Pool = createPool(database);

export async function connect() {
  try {
    const connection: PoolConnection = await pool.getConnection();
    return connection;
  } catch (e) {
    const err = new AppError(e);
    err.report();
  }
}
