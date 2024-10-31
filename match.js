let str1 = "Hello, i am a developer. A great developer. ha ha ha";
let count1 = str1.match(/a/gi).length;

console.log(`The letter "a" appears ${count1} times in the string.`)


/*


/a/gi: This is the regular expression being used to match the letter "a". Here's what each part of the expression does:

/a/: This matches the letter "a".
g: This is the global flag, which means the expression will match all occurrences in the string, not just the first one.
i: This is the ignore case flag, which means the expression will match both uppercase and lowercase "a"s.


*/