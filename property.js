const person = {
    name: 'John',
    age: 34,
    profession: "developer",
    salary: 10000,
    married: true,

    'fav places': ['bandarban','saintmartin','rangamati'],

}



// dot notation (eta sob khetre kora zaay na)
const income = person.salary;
console.log(income);


// bracket notation
console.log(person['salary']);

console.log (person['fav places']);




console.log(person);

person.salary = 30000; // update the property
person['age'] = 30;// update the property
console.log(person);

console.log(person.profession);



const keyname = 'name';
console.log(person[keyname]);
