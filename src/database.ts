import {PoolConnection, createPool, Pool} from 'mysql2/promise';
import {database} from './config';
const pool: Pool = createPool(database);

export function connect(): Promise<PoolConnection> {
  return new Promise(async (resolved, reject) => {
    try {
      const connection: PoolConnection = await pool.getConnection();
      resolved(connection);
    } catch (e) {
      reject(e);
    }
  });
}
