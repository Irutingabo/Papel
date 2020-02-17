import { Pool } from 'pg'

const pool = new Pool({
  user: 'shamiru',
  host: 'localhost',
  database: 'papeldb',
  password: '0002',
  port: 5432,
})

export function query(text, params) { return pool.query(text, params) }
