import dotenv from 'dotenv';
import Pool from 'pg-pool';

dotenv.config();
const isProduction = process.env.NODE_ENV === "production";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
});

export default pool;
