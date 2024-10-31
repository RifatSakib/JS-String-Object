// Task-1:
// Count how many times a string has the letter a

let str = "Hello, i am a developer. A great developer. ha ha ha";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'a') {
    count++;
  }
}

console.log(`The letter "a" appears ${count} times in the string.`);

// method 2

let str1 = "Hello, i am a developer. A great developer. ha ha ha";
let count1 = str1.match(/a/gi).length;

console.log(`The letter "a" appears ${count1} times in the string.`)


/*


/a/gi: This is the regular expression being used to match the letter "a". Here's what each part of the expression does:

/a/: This matches the letter "a".
g: This is the global flag, which means the expression will match all occurrences in the string, not just the first one.
i: This is the ignore case flag, which means the expression will match both uppercase and lowercase "a"s.


*/




// =========================================================
/*
task-2
Count how many times a string has the letter a or A
*/

// method-1 
let str2 = "Hello, i am a developer. A great developer. ha ha ha";
let count2 = 0;
let countA = 0;

for (let i = 0; i < str2.length; i++) {
  if (str2[i] === 'a') {
    count2++;
  }

  else if(str2[i] === 'A'){
    countA++
  }
}

console.log(`The letter "a" appears ${count2} times in the string.`);
console.log(`the A: ${countA} times in the string`);


// method 2


let str_m2 = "Hello, i am a developer. A great developer. ha ha ha";
let count_m2 = str_m2.match(/a/g).length;
let count2_m2 = str_m2.match(/A/g).length;

console.log(`The letter "a" appears ${count_m2} times in the string.`)
console.log(`The letter "A" appears ${count2_m2} times in the string.`)






// task 3
// Check whether a string contains all the vowels a, e, i, o, u

let str3 = "Hello, i am a developer. A great developer. ha ha ha";
let vowels = 'aeiouAEIOU';
let hasAllVowels = true;

for (let i = 0; i < vowels.length; i++) {
  if (str3.indexOf(vowels[i]) === -1) {
    hasAllVowels = false;
    break;
  }
}

console.log(`The string ${hasAllVowels ? 'contains' : 'does not contain'} all the vowels.`);


/*
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/
let string4 = "axe  aXe ";
if (string4.includes('x')){
  string4 = string4.replace('x', 'y');
} 

if (string4.includes('X')){
  string4 = string4.replace('X', 'Y');
} 

else {
  console.log('The string has no x,y,X,Y');
}

console.log(string4);



//task 5

function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, match => match.toUpperCase());
}
console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetter("this is a test")); // Output: "This Is A Test"

/*
Here's an explanation of the code:

We define a function capitalizeFirstLetter that takes a string str as an input.
We use the replace() method with a regular expression to match each word boundary (\b) followed by a word character (\w).
We use a callback function to capitalize the matched character using the toUpperCase() method.
*/