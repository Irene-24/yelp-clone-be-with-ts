--create database
CREATE DATABASE yelp;

-- enable uuid
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- create restaurants table 
CREATE TABLE restaurants (
    id uuid DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    price_range INT NOT NULL DEFAULT 5 
	CHECK(price_range >=1 AND price_range <= 5),
    location VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id) 
);

--insert data into restarants table
INSERT INTO restaurants (name,location,price_range) 
VALUES('Mr Biggs','onitsha',2);
INSERT INTO restaurants (name,location,price_range) 
VALUES('Chicken republic','lagos',3);
