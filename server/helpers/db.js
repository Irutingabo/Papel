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

    const tableAccount = `
    CREATE TABLE IF NOT EXISTS accounts (
      accountId serial PRIMARY KEY,
      username text,
      email text,
      accountnumber text,
      accountType text,
      status text,
      openingBalance float,
      balance float,
      createdOn text
    );
    `

    const tableTransactions = `
    CREATE TABLE IF NOT EXISTS transactions (
      transactionId serial PRIMARY KEY,
      username text,
      transactionType text,
      accountnumber text,
      cashier text,
      amount float,
      oldBalance float,
      newBalance float,
      createdOn text
    );
    `
    
    query(tableQueries)
    query(tableAccount)
    query(tableTransactions)

}

export const truncateTable = () => {
  const tuncateusers = 'TRUNCATE TABLE users CASCADE'
  
  const tuncateaccounts = 'TRUNCATE TABLE accounts CASCADE'
  
  const tuncatetransactions = 'TRUNCATE TABLE transactions CASCADE'
  
  query(tuncateusers)
  query(tuncateaccounts)
  query(tuncatetransactions)
}
