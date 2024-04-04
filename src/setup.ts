import { sql } from '../lib/postgres';

async function setup() {
  await sql/* sql */ `CREATE TABLE IF NOT EXISTS url_shortener (
    id SERIAL PRIMARY KEY,
    code TEXT UNIQUE,
    original_url TEXT,
    creted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  await sql.end();

  console.log('setup done successfully!');
}

setup();
