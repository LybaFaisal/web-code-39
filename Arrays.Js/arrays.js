let arr_data = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0 ; i < 10 ; i++){
    console.log(arr_data[i]);
}

//Splice Method in arrays

let arr = ['Sparrow','Eagle','HummingBird','Crow','Peacock'];

//To add 
arr.splice(1, 0, 'Tiger')
console.log(arr);

//to remove

arr.splice(3 , 1 );
console.log(arr);

//to replace

arr.splice(3, 1 , 'Snake');
console.log(arr);

// Acessing through loop

for(let j = 0 ; j < 5 ; j++){
    console.log(arr[j]);
}