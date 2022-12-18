create database mcu_db;

use mcu_db;

create table company (
    id varchar(199) primary key not null,
    name varchar(149) not null,
    address text not null,
    lat varchar(255) not null default '17.4385098',
    lng varchar(255) not null default '78.3635962',
    created_on timestamp not null default now(),
    updated_on timestamp not null default now()
);

create table user (
    id varchar(199) primary key not null,
    first_name varchar(149) not null,
    last_name varchar(149) not null,
    email varchar(149) not null,
    designation varchar(149) not null,
    date_of_birth timestamp not null,
    active boolean not null default true,
    company_id varchar(149),
    created_on timestamp not null default now(),
    updated_on timestamp not null default now()
);

-- insert into user ()