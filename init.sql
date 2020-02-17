
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

INSERT INTO users (username, firstName, lastName, email, password, type, isAdmin, createdAt) VALUES
('shama','shama', 'irutingabo', 'irusha@gmail.com', 'password123', 'savings', true, 'mon-06-5-2020'),
('gogo','gogo', 'Julie', 'jugogo@gmail.com', 'password000', 'savings', false, 'mon-06-5-2020'),
('Sildio','Sildio', 'Greg', 'silgreg@gmail.com', 'password123', 'savings', false, 'mon-06-5-2020'),
('Shawly','Shawly', 'Sharky', 'sha@gmail.com', 'seiriikd123', 'loan', true, 'mon-06-5-2020'),
('Sherkinah','Sherkinah', 'kab', 'kabsha@gmail.com', 'fkfpsvsda', 'savings', true, 'mon-06-5-2020');
