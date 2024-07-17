//Revision of the document 29-06-24
// Syntax of JavaScript:

let count;
count = 5;

var box;
box = "Lyba";

//if-else


let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}


//2nd example


let score = 30;


if (score >= 90) {
    console.log("You are passed with A+ Grade");
}
else if (score >= 80) {
    console.log("You are passed with A Grade");
}
else if (score >= 70) {
    console.log("You are passed with B Grade");
}
else if (score >= 60) {
    console.log("You are passed with C Grade");
}
else {
    console.log("Sorry, You are Failed");
}

//Nested-If

//To check the numbers are positive or negative

let a = 5;
let b = -1;

if (a > 0) {
    if (b > 0) {
        console.log("Both numbers are positive");
    }
    else {
        console.log("Only Number 1 is positive");
    }
}
else {
    console.log("Both are negative numbers");
}

//Switch Statements

//Converting Multiple If-Else to Switch Statements

let std_score = 80;

switch (true) {
    case (std_score >= 90):
        {
            console.log("You are passed with A+ Grade");
            break;
        }

    case (std_score >= 80):
        {
            console.log("You are passed with A Grade");
            break;
        }

    case (std_score >= 70):
        {
            console.log("You are passed with B Grade");
            break;
        }

    case (std_score >= 60):
        {
            console.log("You are passed with C Grade");
            break;
        }

    default:
        {
            console.log("Failed");
            break;
        }
}


//Nested-if

let x = -2;
let y = 4;

if (y >= 0) {
    if (x >= 0) {
        console.log("both x and y are positive");
    }
    else {
        console.log("x is negative , but y is positive");
    }
}
else {
    console.log("y is negative");
}



//Table with For Loop:

for (let a = 1; a <= 10; a++) {
    document.write("16 x " + a + " = " + a * 16 + "<br>");
}


// 2 x 1 = 2
// 2 x 2 = 4


//Table with for loop

for (let b = 1; b <= 10; b++) {
    console.log("19 x " + b + " = " + b * 19);
}

//LOOPS PRACTICE

//see what what we can do with for loop

//example # 1
//printing numbers from 1 to 10

console.log("The Numbers from 1 to 10 are=");
for (let n = 1; n <= 10; n++) {
    console.log(n);
}

//example # 2
//printing even numbers from 1 - 20

console.log("The Even Numbers from 1 to 20 are=");
for (let m = 2; m <= 20; m += 2) {
    console.log(m);
}

//example # 3
//sum of numbers 1 to 5

console.log("Sum of Numbers 1 to 5 are:");
let sum = 0;
for (let s = 1; s <= 5; s++) {
    sum += s;
}

console.log(`Sum = ${sum}`); //Through backticks
console.log('Sum =', sum);  //Through comma
console.log("Sum = " + sum); //Through +

//example # 4
//Print characters of a string

console.log("The characters in the string are:");
let str = 'Hey I am Lyba';
for (let i = 0; i <= str.length; i++) {
    console.log(str[i]);
}

//example # 5
//Print numbers from 10 to 1 (reverse order)

console.log("Numbers in reverse order are:");
for (let r = 10; r >= 1; r--) {
    console.log(r);
}

//example # 6
//Create a multiplication table for 2

console.log("The multiplication table for 2 is:");
for (let t = 1; t <= 10; t++) {
    console.log(`2 x ${t} = ${2 * t}`); //2 x 1 = 2
}

//example # 7
//Calculate the factorial of 5

console.log("The factorial of 5 is:");
let factorial = 1;
for (let f = 1; f <= 5; f++) {
    factorial *= f;    // (*=) - Factorial
    console.log(factorial);
}

//example # 8
//Print first 10 multiples of 3

console.log("First Multiples of 3 are:");
for (let c = 1; c <= 10; c++) {
    console.log(`${3 * c}`);
}

//example # 9
//Print numbers from 1 to 10, skipping multiples of 3

//here we'll use continue for skipping the multiples of 3

console.log("Numbers from 1 to 10, skipping multiples of 3 are :");

for (let p = 1; p <= 10; p++) {
    if (p % 3 == 0) {
        continue;
    }
    console.log(p);
}

//example # 10
//Print the squares of numbers from 1 to 5

console.log("The Squares from numbers 1 to 5 are:");
for (let sq = 1; sq <= 5; sq++) {
    console.log(`The Square of ${sq} is: ${sq * sq}`);
}

//example # 11
//Print first 10 odd numbers

console.log("The first ten odd numbers are:");
for (let o = 1; o <= 20; o += 2) {
    console.log(o);
}

//OR

for (let odd = 1; odd <= 20; odd++) {
    if (odd % 2 == 0) {
        continue;
    }
    console.log(odd);
}

//example # 12
//Print a pattern of stars (triangle)

console.log("The pattern for stars are in triangle as:");
let stars = '';
for (let t = 1; t <= 5; t++) {
    stars += '*';
    console.log(stars);
}

//example # 13
//Calculate the sum of all even numbers from 1 to 20

let sum_of_even = 0;

for (let even = 1; even <= 20; even++) {
    if (even % 2 == 0) {
        sum_of_even += even;
    }
}
console.log(`Sum of even numbers from 1 - 20 is: ${sum_of_even}`);

//example # 14
//Print the first 10 powers of 2

//output ->  
//2 ^ 1 = 2  {2-> base 1-> exponent}
//2 ^ 2 = 4  {2-> base 2-> exponent}
//2 ^ 3 = 8  {2-> base 3-> exponent}

for (let power = 1; power <= 10; power++) {
    console.log(`2 ^ ${power} = ${Math.pow(2, power)}`);
    //Function Math.pow
}

//example # 15
//Printing all letters from A - Z

for (let l = 65 ; l <= 90 ; l++)   //65 is ASCII code for A & 90 ->Z
{
    console.log(String.fromCharCode(l));
}

//97 is an Ascii code -> a :  112 -> z

//example # 16
//Calculate the sum of the first 10 odd numbers

let sum_of_odd = 0;
for (let odd_num = 1 ; odd_num <= 20 ;  odd_num += 2)
{
    sum_of_odd += odd_num;
}
console.log(`The sum of odd numbers is: ${sum_of_odd}`);

//example # 17
//Print numbers from 1 to 50, but stop if the number is 25

console.log("The numbers from 1 to 50 but if 25 comes it'll stop!");
for (let stop = 1 ; stop <= 50 ; stop++)
{
    if( stop == 25)
    {
        break;
    }
    console.log(stop);
}
console.log(`Hey I am 25, Stop the chain!`);