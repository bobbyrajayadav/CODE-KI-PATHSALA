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
let num = 12321;
let originalNum = num;
let reverse = 0;
while(num > 0){
    let digit = num%10;
    reverse = (reverse*10) + digit;
    num = Math.floor(num/10);
}
if(originalNum === reverse){
    console.log(originalNum + " is a palindrome.");
}else{
    console.log(originalNum + " is not a palindrome.");
}


// 9. Print all prime numbers between 1 to 100.
// Prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
for(let i=1; i<=100; i++){
    if(i > 1){
        let isPrime = true;
        for(let j=2; j<i; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

for(let i=1; i<=100; i++)


// 10. Find factorial of a number.