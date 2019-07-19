
//typeof operator
let firstName = 'Meenu'; 
console.log(typeof firstName);   //return a String
console.log(typeof 12.23);      //return a Number
console.log(typeof true);       //return a Boolean
console.log(typeof [1,2,3,4]);  //return an object
console.log(typeof new Date());  //return an object
console.log(typeof null);        //return an object
console.log(typeof function(){});  //return a function

//instanceof operator
let lastName = 'singh';
console.log(lastName instanceof String);

let middleName = new String('Rani');
console.log(middleName instanceof String);
