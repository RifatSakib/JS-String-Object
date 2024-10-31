const sentence = 'hello I am learning web development';
//  const result =


 //web
 //w
//ew
//bew


//by for of
let reverse = ' ';

for(const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
} 
console.log(reverse);



// by for

let rev= '';

for (let i =0 ; i<sentence.length; i++) {
//  console.log(i);
//  console.log(sentence[i]);
const letter = sentence[i];
rev = letter+ rev;
}

console.log(rev);


// shortcut

const reversed =  sentence.split('').reverse().join('');
console.log(reversed);




