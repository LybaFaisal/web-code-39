let arr_data = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0 ; i < 10 ; i++){
    console.log(arr_data[i]);
}

//Splice Method in arrays

let arr = ['Sparrow','Eagle','HummingBird','Crow','Peacock'];

//To add 
arr.splice(1, 0, 'Tiger')
console.log(arr.toString());  //using .tostring();

//to remove

arr.splice(3 , 1 );
console.log(arr.toString());

//to replace

arr.splice(3, 1 , 'Snake');
console.log(arr.join('*'));

// Acessing through loop

for(let j = 0 ; j < 5 ; j++){
    console.log(arr[j]);
}

//through arr.length

console.log(`The following array through length property is:`);

for(let j = 0 ; j < arr.length ; j++){
    console.log(arr[j]);
}

console.log(`Concatenation of the following array=`);
//concatenation in arrays=>
    
let arr1 = [1,3,5,7,9];
let arr2 = [2,4,6,8,10];
let arr_combined = arr1.concat(arr2);
console.log(arr_combined);

//converting to string

console.log(`The combined array in the string is=`);

console.log(arr_combined.toString());