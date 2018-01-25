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
	 					- create table moments (id int primary key auto_increment, year year);	
	 					- insert into moments (theYear, theDate, theTime) values ('2015' , '2014-05-15' , '08:10:23');

	 			-Timestamp and Datetime
	 					-timestamp goes back to 1970 where DateTime goes back to year 1000		
	 					-timestamp is like how it sounds. stamps a current moment
	 					- create table productsss (name varchar(60), sold_at timestamp default now(), received datetime)
	 					- datetime is an arbitary moment in the past or future
				-Enumerations
						- the enum type allows for a choice between values
						- ex temperature enum('cold', 'hot')

The Distinct Keyword
	- select distinct * from users
	- distinct only selects the unique values
	- select distinct name, age from users
	- select count(distinct name) from users
	- 20 vs 17


More Aggregate functions
	- aggregate function on a column will not count null values
	- https://dev.mysql.com/doc/refman/5.7/en/group-by-functions.html
	- avg, count max min Sum are pretty much most common

Arithmetic in MySql

	- select avg(age)*10 from users for example
	- select sum(age)

Grouping results
	- select avg(weight) from survey group by gender
	- select country, count(*),  avg(smoke) from survey group by country order by avg(smoke)
	- able to order by using agregate functions
	- we cant use a where cause with an agregate functions
	- this is what having is for
	- having we use after group by in order to limit results
	- having must be used after group by
	- select country, max(weight) from survey group by country having max(weight) > 100 order by max(weight) desc
	- select country, avg(age) from survey group by country having avg(age) > 40


Exercises
	-- 1. Select all the rows where age is greater than 20 but not less than 30
-- select * from users where age >= 30;
-- 2. Select all rows where age is between 20 (inclusive) and 30 (inclusive)
-- select * from users where age >= 20 and age <= 30;
-- 3 Select all rows where age is between 20 (inclusive) and 30 (inclusive) and the name is not "Vicky"
-- select * from users where (age >= 20 and age <=30) and not name = "Vicky";
-- 4. Select all rows where either the name is null or the name does not contain the letter "e"
-- select * from users where name = null or name not like "%e%"
-- 5. Select all rows for users aged between 30 and 40 whether the name contains either the letter "o" or "e"
-- select * from users where age > 30 and age < 40 and name like "%o,%" or name like "%e%"
-- 6. Select all rows where either the name contains an "o" or the id is less than 5. but not both 
-- select * from users where id < 5 xor name like "%o%"

-- Answer using only one SQL query for each question.
-- 1. Find out the average weight for each country. 
-- select country, avg(weight) from survey group by country order by avg(weight) desc
-- 2. Create a list of the number of respondents from each country. Order the list by the number of respondents
-- Show only those countries where the number of respondents was greater than 3
-- select country,  count(*) from survey group by  country having count(*) > 3 order by count(*) desc 
-- 3. Display the average height for each country. Show also the number of respondents for each country and order the list by average height
-- select country, avg(height), count(*) from survey group by country order by avg(height)
-- 4. for each country. find the average weight of both men and women in that country and the number of respondents in each gener- country category
-- Dusplay only those categories containing more than two respondents. Order the results by country
-- select country, gender, avg(weight), count(*) from survey group by country, gender having count(*) > 2 order by country desc
-- 5. For each of the possible four answers to the exercise question, display the average health score for the respondents in that group. Order fomr poor health to good health
-- Is there any relationship between reported amount of exercise and reported state of health? if so why?  
-- select exercies, avg(health) from survey group by exercise order by health

Naming Columns and Tables
	- ALIAS (SUPER IMPORTANT)
			- weight as weight_kg, sugar as sugar_intake_score
	- The as keyword
			- select id as survey_id, weight as weight_kg, sugar as sugar_intake_score from survey
			- 'from survey s' would give us the name s to our query
			- we are now able to run queries like:
			- select s.id as survey_id, s.weight as weight_kg, s.sugar as sugar_intake_score from survey s

Foreign Keys
	- create table person (id int primary key auto_increment, name varchar(50), address_id int, foreign key (address_id) references address(id))
	- key MUL will tell you it is set
	- insert into person(name,address_id) values ('Anna', 1) ... etc 

ER Diagrams (Entity Relationship Diagrams)
	- mysql workbench gives us a really nice way to create these diagrams
	- database reverse enginer in the gui
	- this is like a schema designer online but on the workbench... kinda cool I guess
	- *configuration requires mysql password that is not the one given but the one you set*

Join and Caresian Products
	- not the best way anymore but still a way that works... ( kinda helps you understand what's really going on behind the scenes)
	- THe idea is that the person table has an address id column and that column contains ids that are primary keys of the address table 
	- it enables us to specify an address for any person in the person table we can specify an address an address that is contained in the person table
	- this allows us to have a many to one relationship. 
	- many people can share the same address in the adress table

	- We use a join
		- select * from person
		- select * from person, address ( the cartesian product an idea brought from mathmatics where you have a set of objects as well as another set of objects. from every object from the first set you combine it from every object from the second set... )
		- this means that every row from the person table may be combined from the address table
		- pretty confusing and useless
		- we really want the address id from the person table that matches the primary key from the address table 
		- we weed out the ones we dont match while including the ones that do match
		- but first...
		- select p.id, p.name, p.address_id, a.id, a.street from person p , address a
		- select p.id as person_id, p.name, p.address_id as person_address_id, a.id as address_id, a.street from person p , address a
		- we want to match
		- we can use where clause 
		- where p.address_id =a.id
		- is one way of doing it but may be deprecated and not ideal...
		- more eloquent solution... 
		- select p.id as person_id, p.name, p.address_id as person_address_id, a.id as address_id, a.street from person p join address a on a.id = p.address_id


Joins On Multiple Tables
	- select * from drink
	- allows you to select date from additional tables
	- join smoke sm on su.smoke = sm.id join exercise e on e.id=su.exercise
	- for example
	- select su.id, country, age, sm.question, e.question from survey su join smoke sm on su.smoke=sm.id join exercise e on e.id=su.exercise


One to Many and Many to One
	- the foreign key goes on the many side

Many to Many relationship
	- will require a join table
	- create table person_product (person_id int not null, product_id int not null, foreign key (person_id) references person(id), foreign_key (product_id) references product(id))
	- join table requires two foreign keys that point toward the two primary keys on the corresponding table.
	- create table person_product (person_id int not null, product_id int not null, 
foreign key (person_id) references person(id), 
foreign key (product_id) references product(id))

Joining a table on itself
	- you are able to have the same table twice in your query and you can give it different names
	- select * from seats s1 join seats s2 on s1.id=s2.id+1










	 										










