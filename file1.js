/* 1.
The algorithm to convert from Celsius to Fahrenheit is the temperature 
in Celsius times 9/5, plus 32.You are given a variable celsius representing 
a temperature in Celsius. Use the variable fahrenheit already defined 
and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/
function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32 ;
    return fahrenheit;
  }
  
  convertToF(30);

/* 2.
Reverse the provided string.
You may need to turn the string into an 
array before you can reverse it.
Your result must be a string.
*/
function reverseString(str){
let newStr = "";
for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i]
}
return newStr
}
reverseString("Michelle")
////////////////////////////////////////
function reverseStr(str){
return str.split("").reverse().join("")
}
reverseStr("Morris")

/*3.
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is 
the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/
function factorialize(num) {
    let count = 1;
    if(num == 0){
        return count 
    }else{
        for (let i = num; i >= 1; i--){
        count = count * i
        }
    return count;
    }
}
factorialize(5);

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/
function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longStr = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length > longStr){
         longStr = arr[i].length
        }
    }    
    return longStr;
  }
findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*
Return an array consisting of 
the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple 
for loop, and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
    let newArr= []; 
    for (let i = 0; i < arr.length; i++){
    let num = Math.max.apply(null, arr[i]);
    newArr.push(num)
    }
    return newArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.
*/
function repeatStringNumTimes(str, num) {
    let repeatedStr = "";
    while(num > 0){
        repeatedStr += str;
        num--
    }
   return repeatedStr;
}
repeatStringNumTimes("abc", 3);

/*
Truncate a string (first argument) if it is longer than 
the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
    let newStr = '' 
    if (str.length <= num){
        return str
    }else{
        newStr = str.substr(0, num) + "..."
    }
    return newStr
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*
Create a function that looks through an array arr and returns the
 first element in it that passes a 'truth test'. This means that given an element x, 
the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        num = arr[i];
        if (func(num)){
        return num 
        }
    }
return undefined 
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/
function booWho(bool) {
    if (bool === true || bool === false){
        return true
    }
return false;
}
booWho(null);
    