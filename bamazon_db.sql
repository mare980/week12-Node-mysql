CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2)NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone", "electronics", 900.00, 100 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ipad mini", "electronics", 400.00, 200 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone", "electronics", 900.00, 100 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T3 Filter", "home appliances", 25.00, 400 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scope", "personal care", 3.99, 1000 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("the big short ", "books", 9.87, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tide", "household supplies", 11.99, 800 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("callaway driver", "sports", 484.99, 70 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("game of thrones", "movies & tv", 39.99, 300 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vitamix", "kitchen", 359.99, 600 );
