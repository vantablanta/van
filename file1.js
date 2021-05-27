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