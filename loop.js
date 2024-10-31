// for of: array
// for in: object

const mobile = {
    brand: 'samsung',
    price: 250000,
    color: 'black',
    camera: '12mp',
    isNew: true,
}


// for in
for(const properties in mobile ){
    // console.log( properties);
    console.log( mobile[properties]);
}


const keys = Object.keys( mobile );
console.log(keys);

for(const key of keys){
    console.log( key, ':', mobile[key] );
}