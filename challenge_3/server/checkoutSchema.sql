DROP DATABASE IF EXISTS db_checkout;

CREATE DATABASE db_checkout;

USE db_checkout;

CREATE TABLE checkout_session (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  address_1 VARCHAR(255),
  address_2 VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip VARCHAR(255),
  credit_card_number VARCHAR(255),
  expiration_date VARCHAR(255),
  cvv VARCHAR(255),
  billing_zip VARCHAR(255)
)