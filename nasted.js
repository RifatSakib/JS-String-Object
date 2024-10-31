const college = {
    name: 'vnc',
    calss : ['11', '12'],
    events: ['science fair', 'bijoy dibos'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: "top",
        }
    }


}   

console.log(college);
console.log(college.unique);
console.log(college.unique.color);

console.log(college['unique'].color);
console.log(college.unique.result.merit);

college.unique.result.merit = "topest"
console.log(college.unique.result.merit); //updatation


college.events[1]= "16 december"
console.log(college);

//deletation

delete college.calss;
console.log(college);