// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify(obj)
// let json = JSON.stringify(true);

// json = JSON.stringify(['APPLE', 'BANANA']);
// // console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    // symbol: Symbol('idol'),
    //Cannot convert a Symbol value to a string
    jump : () => {
        console.log(`${name} can jump`);
    }
    // function is not data in the Object.
};

json = JSON.stringify(rabbit);
console.log(json);

 json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date() : value;

});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
// console.log(obj)

rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
