const name = 'Bibek';
let age = 21;
const hobby = 'football';

const interfaceUser = (Username, Userage, Userhobby) =>
{
    return ('My name is '+ Username + ' my age is ' + Userage + ' and my hobby is ' + Userhobby);
}
const add = (a,b) => a+b;
console.log(add(1,2));
console.log(interfaceUser(name,age,hobby));

person = {
    name : 'Max',
    age : 29,
    greet () {
         console.log( this.name , age);
        }
}
person.greet();


const hobbies = [ 'sports' , 'cooking' ];
//const [ hobby1,hobby2 ] = hobbies;
//console.log(hobby1,hobby2);
for (let hobby of hobbies)
{
    console.log(hobby);
}
console.log(hobbies.map(hobby => {

    return 'hobby' + hobby;
}))
console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);


const copiedPerson = {...person};
console.log(copiedPerson);


//Destructuring 
//const {name,age } = person;
//console.log(name,age);

setTimeout( () => { 
    console.log('Time out is set');
}, 2000);

//we can also write
//const name = "Max";
//const age = 29;
// console.log(`My name is ${name} and I am ${age} years old.`);




