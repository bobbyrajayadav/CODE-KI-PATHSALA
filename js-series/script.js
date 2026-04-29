// Loops Practice (for, while, do-while)
// 1. Print numbers from 1 to 50 using for loop.

// for(let i=1; i<=50; i++) console.log(i);


// 2. Print even numbers from 1 to 100.
// for(let i=2; i<=100; i+=2) console.log(i);

// 3. Print multiplication table of a number.
// let n = 5
// for(let i=1; i<=10; i++) console.log(n +" * "+ i + " = " + (n*i));

// 4. Reverse a number using while loop.
// let n = 12345;
// let reverse = 0;
// while(n > 0){
//     let digit = n%10;
//     reverse = (reverse*10) + digit;
//     n = Math.floor(n/10);
// }
// console.log(reverse);

// 5. Find sum of digits of a number.
// let num = 12345;
// let sum = 0;
// while(num > 0){
//     let digit = num%10;
//     sum += digit;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// 6. Print Fibonacci series up to N terms.
//fibonacci series is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// let n = 10;
// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for(let i = 2; i < n; i++){
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }

// 7. Count digits in a number.
// let num = 12345;
// let count = 0;
// while(num > 0){
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

// 8. Check if a number is palindrome.
// palindrome number is a number that reads the same backward as forward, e.g., 121, 12321, etc.
// let num = 12321;
// let originalNum = num;
// let reverse = 0;
// while (num > 0) {
//     let digit = num % 10;
//     reverse = (reverse * 10) + digit;
//     num = Math.floor(num / 10);
// }
// if (originalNum === reverse) {
//     console.log(originalNum + " is a palindrome.");
// } else {
//     console.log(originalNum + " is not a palindrome.");
// }


// 9. Print all prime numbers between 1 to 100.
// Prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
// for (let i = 1; i <= 100; i++) {
//     if (i > 1) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i);
//         }
//     }
// }

//


// 10. Find factorial of a number.
// factorial number is a number which is multiplied by itself.
// eg. 5! = 5*4*3*2*1 = 120

// let n = 4
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// Conditionals Practice
// 1. Check if a number is even or odd.

// let n = 122;
// n % 2 == 0 ? console.log("Even") : console.log("Odd");

// 2. Find largest among three numbers.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let max = arr[0];
// for (let i = 0; i <= arr.length; i++){
//     if (arr[i] > max) max = arr[i];
// }
// console.log(max);


// 3. Check if a year is leap year.
// let year = 2026;
// if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
//     console.log(year + " is a leap year.")
// } else {
//     console.log(year + " is not a leap year.")
// }


// 4. Check if a number is positive, negative or zero.
// how to take input in js ?? in browsers use prompt() in node js use readline

// take input a number
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a number: ', (input) => {
//     const n = Number(input);

//     if (n > 0) console.log(`Number : ${n} is greater than zero`);
//     else if (n < 0) console.log(`Number : ${n} is less than zero`);
//     else if (n === 0) console.log(`Number : ${n} is equals to zero`);
//     else console.log("Invalid input. Please enter a number.");

//     readline.close();
// });


// 5. Check if a character is vowel or consonant.
// vowels = a, e, i, o, u and Vowels = A, E, I, O, U
// take input a character
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a character: ', (input) => {
//     const n = input.charAt(0);

//     if (n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u' || n == 'A' || n == 'E' || n == 'I' || n == 'O' || n == 'U') console.log(`Character : ${n} is a vowel`);
//     else console.log(`Character : ${n} is a consonant`);

//     readline.close();
// });


// 6. Check eligibility for voting.
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a number: ', (input) => {
//     const age = Number(input);
//     age >= 18 ? console.log('eligible for voting ') : console.log('not eligible for voting ');
//     readline.close();
// })




// 7. Find grade based on marks.
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter grades: ', (input) => {
//     const grades = Number(input);
//     if (grades <= 100 && grades >= 90) console.log("grade A");
//     else if (grades >= 80 && grades < 90) console.log("grade B");
//     else if (grades >= 70 && grades < 80) console.log("grade C");
//     else if (grades >= 60 && grades < 70) console.log("grade D");
//     else if (grades >= 50 && grades < 60) console.log("grade E");
//     else if (grades >= 0 && grades < 50) console.log("grade F");
//     else console.log("Invalid input");
//     readline.close();
// })


// 8. Check if number is divisible by 5 and 11.
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a number: ', (input) => {
//     const n = Number(input);
//     (n % 5 == 0 && n % 11 == 0) ? console.log('number is divisible ') : console.log('not divisible');
//     readline.close();
// })

// 9. Check if number is Armstrong number.
// an Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits
// eg. 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a number: ', (input) => {
//     let n = Number(input);
//     let originalNum = n;
//     let sum = 0;

//     while (n > 0) {
//         let digit = n % 10;
//         sum = sum + digit ** 3;
//         n = Math.floor(n / 10);
//     }
//     sum == originalNum ? console.log(`${originalNum} is an Armstrong number`) : console.log(`${originalNum} is not an Armstrong number`);
//     readline.close();
// })

// 10. Check if triangle is valid
// let a = 10;
// let b = 3;
// let c = 12;
// if (a + b > c && a + c > b && b + c > a) console.log("triangle is valid");
// else console.log("triangle is not valid");


// ********************************************************************************************************************************************************************


// Functions Practice
// 1. Create a function to add two numbers.
// function addTwoNumbers(a, b) {
//     return a + b;
// }
// console.log(addTwoNumbers(10, 20));


// 2. Function to find square of a number.
// function findSquare(a) {
//     return a * a;
// }
// console.log(findSquare(10));


// 3. Function to check prime number.
// function checkPrime(a) {
//     for (let i = 2; i < a; i++) {
//         if (a % i == 0) return false;
//     }
//     return true;
// }
// console.log(checkPrime(10));


// 4. Function to reverse a string.
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));


// 5. Function to count vowels in string.
// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("hello"));


// 6. Function to calculate factorial.
// function factorial(n) {
//     if (n == 0 || n == 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));


// 7. Function to find max in array.
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//     }
//     return max;
// }
// console.log(findMax([1, 2, 3, 4, 5]));


// 8. Function to convert Celsius to Fahrenheit.
// function convertCelsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// console.log(convertCelsiusToFahrenheit(10));


// 9. Function to check palindrome string.
// function checkPalindrome(str) {
//     return str == str.split("").reverse().join("");
// }
// console.log(checkPalindrome("madam"));


// 10. Function to sum all elements of array
// function addElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(addElements([1, 2, 3, 4, 5]));

//***************************************************************************************************************************************************************** */

// Ternary Operator Practice
// 1. Check even or odd using ternary.
// function checkEvenOrOdd(num) {
//     return num % 2 == 0 ? "Even" : "Odd";
// }
// console.log(checkEvenOrOdd(10));


// 2. Find max of two numbers using ternary.
// function findMax(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }
// console.log(findMax(10, 20));


// 3. Check eligibility (age >= 18).
// function checkEligibility(age) {
//     return age >= 18 ? "Eligible" : "Not Eligible";
// }
// console.log(checkEligibility(18));

// 4. Check positive/negative using ternary.
// function checkPositiveOrNegative(num) {
//     return num > 0 ? "Positive" : "Negative";
// }
// console.log(checkPositiveOrNegative(10));


// 5. Assign 'Pass' or 'Fail' based on marks.
// function checkPassOrFail(marks) {
//     return marks >= 33 ? "Pass" : "Fail";
// }
// console.log(checkPassOrFail(10));


// 6. Check if number is zero or not.
// function checkZeroOrNot(num) {
//     return num == 0 ? "Zero" : "Not Zero";
// }
// console.log(checkZeroOrNot(10));


// 7. Check if string is empty.
// function checkEmptyString(str) {
//     return str == "" ? "Empty" : "Not Empty";
// }
// console.log(checkEmptyString(10));


// 8. Compare two numbers.
// function compareTwoNumbers(num1, num2) {
//     return num1 > num2 ? "num1 is greater" : "num2 is greater";
// }
// console.log(compareTwoNumbers(10, 20));


// 9. Check divisibility by 3.
// function checkDivisibilityBy3(num) {
//     return num % 3 == 0 ? "Divisible by 3" : "Not divisible by 3";
// }
// console.log(checkDivisibilityBy3(10));
// 10. Check if number is multiple of 10.
// function checkMultipleOf10(num) {
//     return num % 10 == 0 ? "Multiple of 10" : "Not a multiple of 10";
// }
// console.log(checkMultipleOf10(10));


/**************************************************************************************************************************************************************** */

// Template Literals Practice
// Templte Literals are the string literals that are enclosed in backticks (``) instead of single or double quotes.
// They allow us to embed expressions and variables inside strings using the ${expression} syntax.


// 1. Print name and age using template literals.
// let name = "John";
// let age = 20;
// console.log(`Name: ${name}, Age: ${age}`);


// 2. Create greeting message using variables.
// let name = "John";
// let message = `Hello ${name}, welcome to the world of JavaScript!`;
// console.log(message);



// 3. Print table of number using template literals.
// let num = 5;
// console.log(`Table of ${num}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }


// 4. Combine first name and last name.
// let firstName = "John";
// let lastName = "Doe";
// console.log(`Full Name: ${firstName} ${lastName}`);


// 5. Display price with currency symbol.
// let price = 10;
// console.log(`Price: $${price}`);

// 6. Create dynamic message using variables.
// let name = "John";
// let message = `Hello ${name}, welcome to the world of JavaScript!`;
// console.log(message);


// 7. Print multiline string.



// 8. Show order summary.
// 9. Display user profile info.
// 10. Create invoice format output