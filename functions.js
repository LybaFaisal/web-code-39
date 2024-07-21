let p = 'Lyba';
function Myname(x) {
    
 if (typeof x !== 'undefined'){
    console.log(`My name is ${p} .`);
 }
 else{
    console.log(`My name is undefined!`);
 }
}
 Myname();
 Myname(p);

 //Output
//My name is undefined!
// My name is Lyba .

//Function as  a variable / Function by expression
//syntax

let y = 45 , z = 34;
let sum = function(){
    return y+z;  //calculations in functions and its stored in a variable;
    //return is always value 1
}
console.log(sum(y,z));

//example

let std_name;
let test = function(std_name){
    if (typeof std_name !== 'undefined')
    {
        return 1;
    }
    else{
        return 0;
    }
}
console.log(test());

//Functions practice 2024

//function to add 2 numbers

let a, b;
function addition(a,b){
    return a + b ;
}
console.log(addition(3,5)); 

//Subtraction 

function subtraction(a,b)
{
    return a-b;
}
console.log(subtraction(7,3));