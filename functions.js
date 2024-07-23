let p = 'Lyba';
function Myname(x) {

    if (typeof x == 'undefined') {   //==  /   !==
        console.log(`My name is undefined!`);
    }
    else {
        console.log(`My name is ${p}!`);
    }
}
Myname();
Myname(p);

//Output
//My name is undefined!
// My name is Lyba .

//Function as  a variable / Function by expression
//syntax 

let y = 45, z = 34;
let sum = function () {
    return y + z;  //calculations in functions and its stored in a variable;
    //return is always value 1
}
console.log(sum(y, z));

//example

let std_name;
let test = function (std_name) {
    if (typeof std_name !== 'undefined') {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(test());

//Functions practice 2024

//function to add 2 numbers

let a, b;
function addition(a, b) {    //function function_name () { definition }
    return a + b;
}
console.log(addition(3, 5));  //addition(4,4);

//Subtraction 

function subtraction(a, b) {
    return a - b;
}
console.log(subtraction(7, 3));

//Multiplication

function Multiplication(a, b) {
    return a * b;
}
console.log(Multiplication(8, 7));

//Division

function Division(a, b) {
    return a / b;
}
console.log(Division(18, 4));

//Function to check if the number is even?

let num;
function even_num(num){
    return num % 2 == 0;
}
console.log(even_num(65));
//Answer will be in boolean (true / false)

//Function to Find the Length of a String

let str;
function string_length(str){
    return str.length;
}
console.log(string_length('Lyba Faisal'));

//Function to find the maximum of three numbers

let i, j, k;
function maximum(i, j, k)
{ 
    return Math.max(i, j, k);  //built-in math.max
}
console.log(maximum(2,60,9));

//Function to Check if a String Contains a Substring

function contain_substring(str , Substring)
{
    return str.includes(Substring);                    //Built-in function .includes()
}
console.log(contain_substring('Lyba Faisal', 'Lyba')); //true
console.log(contain_substring('Hello World', 'Lyba')); //false

//Function as an expression

let m ,l ;
let sum1 = function(m,l){
    return m+l;
}
let mySum = sum1(3,4);
console.log(mySum);

//Task # 3 in assignment =>

let num1 = 2;
let num2 = 5;

let test1 = num1 % 2;
let test2 = num2 % 2;

result1 = test1 == 0;
result2 = test2 == 0;

console.log(`Is ${num1} an even number? ${result1}`);
console.log(`Is ${num2} an even number? ${result2}`);

//Task with loop

for (let number1 = 1 ; number1 <= 20 ; number1++)
{
    if(number1 % 2 == 0)
    {
        console.log(`The ${number1} is even!`);
    }
    else{
        console.log(`The ${number1} is odd!`);
    }
}

//Task # 3 assignment with function:

let number_;

function test_ (number_){
    return number_ % 2 == 0;
}

console.log(test_(8));    //true = even
console.log(test_(9));    //false = odd
//Logical Operators provide answers in boolean.

//OR

let numm1, numm2, testt1, testt2, resultt1, resultt2;
numm1 = 43;
numm2 = 44;
//calculation=>

let cal = function(numm)  //formal parameters
{
    return numm % 2 == 0;
}

testt1 = cal(numm1);
testt2 = cal(numm2);
//Comparing=>

resultt1 = testt1;
resultt2 = testt2;
//Display the result on console=>

console.log(`Is ${numm1} an even number ${resultt1}.`);
console.log(`Is ${numm2} an even number ${resultt2}.`);
//numm1 and numm2 are actual parameters

//Function to check the number +ve / -ve / zero

function check_num (numberr){
    if (numberr > 0){
        return "Positive";
    }
    else if (numberr < 0){
        return "Negative";
    }
    else{
        return "Zero"
    }
}
console.log(check_num(8));
console.log(check_num(-9));
console.log(check_num(0));