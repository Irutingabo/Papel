import { query } from './config/config'

export const createTable = () => {
    const createTable = `
    CREATE TABLE IF NOT EXISTS users (
      userId serial PRIMARY KEY,
      email text NOT NULL,
      username text,
      firstName text,
      lastName text,
      type text,
      isAdmin boolean,
      password text, 
      createdAt text
    );
    `
    query(createTable)
}

export const truncateTable = () => {
    const truncateTable = 'TRUNCATE TABLE users CASCADE'
    query(truncateTable)
}
