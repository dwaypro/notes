Variables
  - A variable is a place in memory that you can store something in. You can point by reference or point by value
  - using int is better to use generally
  - float and double deal with decimal values
  - double has twice the precision

primitive Data Types built into the language
  - byte  - can only hold a number between a range 
  - short
  - int
  - long
  - float
  - double 
  - char - limited to one character
  - boolean
    
You can actually build your own data types and combine other data types. 

 The data type string is not actually built into Java. it is a sequence of characters.   

 is the 9th data type.

to concatanenate strings

String myString ="this is a string";

myString = myString +", and this is more.";

Java unlike javascript doesn't coerce the types. ex:

numberString = "250.55";
numberString = numberString +"49.95";

returns => "250.5549.55"

string lastString = "10";
int myInt = 50;

lastString =  lastString + myInt;

returns => "1050"

Java converts integer to text and appends 50 to the string lastString.  



