show databases
 => databases

create databases tutorial1
show databases
=> databases + tutorial1

use tutorial1

create table users (username text)
show tables

desc users

drop table test

insert into users (username) values ("Bobby")

select * from users

create table users (id int, username text)

create table heroes (id int not null, username text not null)

in MySql The default value for a text type is a blank string which is not the same as null 

show engines
	- a MySql engine is a module that deals with your sql and constructs tables
	- supports various different engines. 
	- Historically built arround MyISAM engine good start but it didn't support
	transactions or foreign keys
	- InnoDB supports transactions and foreign keys. should be set to Default

show table status
	- reveals each engine that each table is using

set default_storage_engine=MYISAM
	- sets the default

	SQL MODES

	GLOBAL
		- select @@GLOBAL.SQL_MODE
	SESSION
		- select @@ SESSION.SQL_MODE
	STRICT (set  sql_mode = "STRICT_ALL_TABLES")
		- if you now dont specify a value of a nonnull table you will receive an error

Deleting all the Data in a table
	 select @@SESSION.SQL_SAFE_UPDATES shows the status 
	 set sql_safe_updates = 0 makes the data unsafe. probably unadvisable
	 delete from users will work now 

	
Primary Key
 - usualy the id column
 - create table users (id int primary key, name text, email text)
 - can't have duplicate values 
 - can't have null 	 			
 - bad practice to duplicate data in a database


Auto Increment
	- will auto increment the primary key with each new entry
	- mysql will not allow 0 in an auto increment column

Narrowing Down Select and Delete Statements
	- WHERE clause select * from users where id=2
	- * or columns name or id 
	- delete from users where id=3


	Comparison Operators
		- more complicated select queries on single table data
		- they are Key words and symbols