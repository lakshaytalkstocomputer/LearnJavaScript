console.log("Hello World");

// In - line comments

/* Multiline Comments
   also a comment 
   also a comment 
   also a comment
   also a comment
*/

/* Data Types:
1. undefined := something that has not 
				been yet defined
2. null := something that we have set
		   to null which is nothing
3. boolean := true or false
4. string := usual string
5. symbol := immutable primitive value
			 that is unique
6. number := usual number
7. object := it can store a lot of 
			 different key value pairs
*/

/* to declare a variable use 
   'var' keyword
   'let'   ""
   'const' ""
*/

var myName = "LAksay";

myName = 88765;
/* var could be used throuout
   whole program
*/
let ourName = "Sagar";

/* let will be used within the 
   scope where we declare that
*/
const pi = 3.14;

/* const is a variable that can 
   never change
*/

/* Declaring and assigning a variable
*/

//Declaring
var a;

//declaring and Assigning
var b =2;

//assigning
a=7;
b=a;
console.log(a);

// variables names in javascript
// are case senstive

/* to use double quotes in string use
   backslash
   other method os to write a string 
   in single quotes
   and other method is to enclose it in 
   backticks ``
*/

var mystr = "I am a \"double quote\" string"
console.log(mystr);

var mystr1 = '"Hello  I am in double quotes enclosed in single quotes"';
console.log(mystr1);

var mystr2 = `'"I am in double in single enclosed with backticks"'`
console.log(mystr2);

/* ESCAPE SEQUNCES
   
   \'  SINGLE QUOTE
   \"  DOUBLE QUOTE
   \\  BACKSLASH
   \n  NEWLINE
   \r  CARRIAGE RETURN
   \t  TAB
   \b  BACKSPACE
   \f  FORM FEED		
*/

mystr = "\" Hello \" \n This is NEWLINE"
console.log(mystr);
mystr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(mystr);

/* Concatenate the string with + operator 
   and short hand += also works
*/
mystr = "This is the start." + " This is the end."
console.log(mystr);

var someAdjective = "worthwhile";
var mystr = "Learning to code is ";
mystr += someAdjective;
console.log(mystr);

/* length of the string 
   Use .length
*/

var lastNameLength;
var LastName = "Rana"
lastNameLength = LastName.length
console.log(lastNameLength)

/* Bracket notation is used to get specifc character
   from string
   counting start from 0
*/

var firstLetter;
var name = "Lakshay"

firstLetter = name[0]
console.log(firstLetter);

/* Strings are immutable which means we 
   cannot change the specific letter but we can 
   change the whole word
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
	var result = "";
	
	result = "The "+myAdjective+ " "+myNoun+" "+myVerb+" to the store "+myAdverb+".";
	return result;

}

console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));

/*
Arrays
*/
var ourArray = ["John", 23];

var myArray = ["Quincy", 1.1];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray.length);

// Array within Array
ourArray = [["The universe",42], ["everything",101010]]
console.log(ourArray);
console.log(ourArray[0]);
console.log(ourArray[1]);
console.log(ourArray[0][0]);
console.log(ourArray[0][1]);
console.log(ourArray[0].length);

// change the value with bracket notation
ourArray[0] =1.1;
ourArray[1] =1.1;
console.log(ourArray);

/* Append data to end of array with push()
*/

myArray = [1,2,3]
myArray.push(4);
console.log(myArray);

/* .pop() removes last element of the array and returns it
*/
var rem = myArray.pop();
console.log(myArray);
console.log(rem);

/* .shift() removes first element of the array and return it
*/

rem = myArray.shift()
console.log(myArray);
console.log(rem);

/* .unshift() add elemtn to the beginning
of the array */

myArray.unshift("Hello");
console.log(myArray);

// Example :SHopping list

var myList = [["cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",12]]

/* Fucntions */

function reusableCode(a){
	console.log("Hello World " + a);
}

reusableCode("Lakshay");
reusableCode(4);


/* Global scope and Functions

   Scope refers to the visibility of
   the variables.
   Variables which are defined outside the function block
   are global.
   Global variables means they can be seen everywhere
   in your JavaScript code.

*/

// Declare your variable here
var myGlobal = 10;

function fun1()
{
  // if we put var keyword the
  // variable will be scoped to 
  // this function
  // but if we do not then tthe variable
  // will be global

  //var oopsGLobal = 5;
  oopsGLobal =5;
}

function fun2()
{
	var output ="";
	if(typeof myGlobal != "undefined")
	{
		output += "myGLobal: " + myGlobal;
	}
	if(typeof oopsGLobal != "undefined")
	{
		output += " oopsGLobal: "+oopsGLobal;
	}
	console.log(output);
}
fun1();
fun2();

/* If we name the local and global variable
   with the same name
   When we do this local variable take precedence 
   over global variable

*/
var outerWear = "T-shirt";

function myOutfit()
{
	var outerWear = "Sweater";
   return outerWear;
}

console.log(myOutfit());

