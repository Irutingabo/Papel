import { query } from '../config/config'

export const createTable = () => {
    const tableQueries = `
    CREATE TABLE IF NOT EXISTS users (
      userid serial PRIMARY KEY,
      email text NOT NULL,
      username text,
      firstname text,
      lastname text,
      type text,
      isAdmin boolean,
      password text, 
      createdAt text
    );
    `
    query(tableQueries)
}

export const truncateTable = () => {
    const tuncateusers = 'TRUNCATE TABLE users CASCADE'
    query(tuncateusers)
}
