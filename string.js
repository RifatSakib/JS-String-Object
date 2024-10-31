
// string is immutable ----> not Changeable
// array is mutable ----> changeable
const country = ' Banladesh';
const division = "Newkhale";
const district= `B-Bariya`;


const thana = new String ('Demra');

console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);

// array
const numbers = [1,2,3,4,5,6];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[3]);
numbers[0] =100; //changed
console.log(numbers);

// string
const capital = 'Dhaka';
console.log(capital);
console.log(capital.length);
console.log(capital[3]);
capital[0] ='F'; //didnot change
console.log(capital);



