CREATE TABLE Operators (
    id INT AUTO_INCREMENT PRIMARY KEY,
    operator_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO Operators (operator_name, password) VALUES
('Ahsan Abbas', 'op@000'),
('Kauzama', 'op@001'),
('Trump', 'op@002'),
('Rayan', 'op@003');
