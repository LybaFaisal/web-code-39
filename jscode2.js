//Revision of the document 29-06-24
// Syntax of JavaScript:

let count;
count = 5;

var box;
box = "Lyba";

//if-else


let age = 18;
if (age >= 18)
    {
        console.log("You are an adult");
    }


//2nd example


let score = 30;


if (score >= 90)
    {
        console.log("You are passed with A+ Grade");
    }
else if (score >= 80)
    {
        console.log("You are passed with A Grade");
    }
else if (score >= 70)
    {
        console.log("You are passed with B Grade");
    }
else if (score >= 60)
    {
        console.log("You are passed with C Grade");
    }    
else
{
    console.log("Sorry, You are Failed");
}

//Nested-If

//To check the numbers are positive or negative

let a = 5;
let b = -1;

if (a>0){
    if (b>0)
        {
            console.log("Both numbers are positive");
        }
    else{
        console.log("Only Number 1 is positive");
    }    
}
else{
    console.log("Both are negative numbers");
}

//Switch Statements

//Converting Multiple If-Else to Switch Statements

let std_score = 80;

switch (true){
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

if(y>=0)
{
    if(x>=0)
    {
        console.log("both x and y are positive");
    }
    else{
        console.log("x is negative , but y is positive");
    }
}
else{
    console.log("y is negative");
}



//Table with For Loop:

for(let a=1; a<=10; a++){
    document.write("16 x "+a+" = "+a*16+ "<br>");
}


// 2 x 1 = 2
// 2 x 2 = 4
