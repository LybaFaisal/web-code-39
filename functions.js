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

