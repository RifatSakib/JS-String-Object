/*
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

 */

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    // console.log(Object.entries(myObject))
   
    for (let [key, value] of Object.entries(myObject)) {
        console.log(`key: ${key} | type: ${typeof value}`);
      }
    
    
    