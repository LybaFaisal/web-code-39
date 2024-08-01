//Creating a simple object

let person = {name:'Lyba' , course: 'ComputerScience' , city:'Faisalabad'};
console.log(person.course);
console.log(person.name);
console.log(person); //showing full obj

//Adding more properties to an object

let cake = {
    cakeTitle: 'Red Velvet' ,
    colour: 'Red',
    Taste: 'yummm',
};

cake.layers = 3;

console.log(cake);

//Modifying Object Properties

let book = {
    Book_title: 'Jannat k Pattay',
    Book_pages: 1470,
    Book_Author: 'Nemrah Ahmad',
    Book_year : 2000
};

//modifying:

book.Book_year = 2002;

console.log(book);