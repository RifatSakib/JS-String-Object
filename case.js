
// "chemistry" === "chemistry"
// JS is case sensitive + spaces also take memory

const subject = " chemistry";
const book = "Chemistry";

if (book.toLocaleLowerCase() === subject.trim()){

    console.log("same same");

}

else {

    console.log("different");

}
