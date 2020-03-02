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


INSERT INTO users (email,username, firstname, lastname, type, isAdmin,  password, createdAt) VALUES
('irusha@gmail.com', 'shama','shama', 'irutingabo', 'admin', true, 'password123',  'mon-06-5-2020'),
('shamiru@gmail.com', 'shama','shama', 'irutingabo', 'user', false, 'password123',  'mon-06-5-2020');



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

