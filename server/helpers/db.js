import { query } from '../config/config'

export const createTable = () => {
    const tableQueries = `
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
    query(tableQueries)
}

export const truncateTable = () => {
    const tuncatequeries = 'TRUNCATE TABLE users CASCADE'
    query(tuncatequeries)
}
