import {query} from './config/config'

const createTable = () => {
    const createTable = `
    CREATE TABLE users (
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

  export default createTable;
