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
		- Key words and symbols
		- https://dev.mysql.com/doc/refman/5.7/en/comparison-operators.html
		- important common ones -  [=,count,>,<,<=, >=,IS,!=, LIKE, is null (**important = null doesnt work in all versions**)] etc see docs
		

	Logical Operators(4)
		- AND, &&
		- NOT, !
		- || , OR
		- XOR
		- https://dev.mysql.com/doc/refman/5.7/en/logical-operators.html
		- You may combine operators 
		- potential ambiguity between conditions , depending on the condition that evaluates to true or false
		- you can put (  ) to make clear what you're asking to get back. essentially... get rows then filter them further
		-XOR returns all the rows where either the first condition applies or the second applies. BUT it will not return the rows where both conditions are met or where both conditions are unmet. 
		-gotcha XOR has to do something or it doesnt. When it reaches a null value it may return more. 
		- XOR is not used that much but you might need it 

	Beginning Update Statements(CRUD)
		for example:
		- update users set name = "Jim" where id = 6

	Order By
		- select * from users where id < 20 order by name asc/desc 
		- asc is default

	Limiting Results
		 - select * from users order by age limit 5	
		 - limits the first 5 
		 - select * from users order by age limit 10, 5
		 - you may offset the query from the specified row for example 5 from 10 onward	

	 Mysql Types
	 	- optimization involves choosing the right types to making your database as efficient as possible
	 	- Text(String) Types
	 			- https://dev.mysql.com/doc/refman/5.7/en/blob.html
	 			- char (amount of text fixed in length will always occupy same space regardless of content) 
	 			- varchar (specify a maximum length but wont take the full amount of the length if left unfilled ie variable) binary varbinary blob (binary object that can hold a large amount of data) enum set tinytext text mediumtext longtext
	 			- blob
	 	-	Numeric Types
	 			- Integer
	 					- Integer int smallint tinyint mediumint bigint
	 			- fixed point types
	 					- decimal numeric
	 			- floating-point types
	 					- float( gives you an option of specifying the precision of a value. important for scientific data) 
	 					- double (uses 8 bytes instead of 4 bytes like float hence the name, still allows to set the precision of a value)
	 					- FLOAT(M,D)  first value describes the number of digits second specifies the number of digits from the decimal point.
	 					- insert into test (width) values (12.34)
	 					- these are always approximate values
	 					- Decimal
	 							- create table test (value decimal(4, 2))
	 							- creates a decimal with 4 values 2 after the decimal point
	 							- insert into test (value) values (12.34) will work
	 							- insert into test (value) values (12.3) its going to be stored as 12.30... so you will always have two decimal points. 
	 			
	 			- bit-value type
	 					- bit
	 							- create table test (bitfield bit(4))
	 							- insert into test(bitfield) values (b '1111')
	 							- select bin test (bitfield) from test

	 			- BOOL (Boolean)
	 					- create table products (product varchar(100), available bool default false)
	 					- insert into products (product, available) values ("electric dog groomer", true)

	 			-BLOB 
	 					- stores a binary file inside of the BLOB type. things like storing, reading, inserting image into mysql. generally not a good idea. It makes more sense to store images on dis		
	 					- insert into data (name, data) values ("holiday1.jpg")

	 			-TIME DATE YEAR
	 					-	select year(now()), time(now()), date(now());;
	 					- create table (id int primary key auto_increment, year year);	

	 										










