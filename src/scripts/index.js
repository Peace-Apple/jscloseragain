import '../styles/index.scss';

console.log('Apple Lurve');

console.log(Number.parseInt('55'));

console.log(typeof(Number.parseInt('55')));

//rest parameters
function sendCars(...myCars){
    myCars.forEach(car => console.log(car));
}

sendCars('one', 'two', 'three');

//spread syntax
function startCars(car1, car2, car3){
    console.log(car1, car2, car3);
}

let myCars = ['one', 'two', 'three'];
startCars(...myCars);

//destructuring arrrays
let myArray = [10, 20, 30];
let [car1, car2, car3 ] = myArray;
//or
//let car1, car2, car3;
//[car1, car2, car3] = myArray;

console.log(car1, car2, car3);

//destructuring objects
let person = {
    name: 'Apple',
    role: 'Software Engineer'
};

let { name, role } = person;
//or
//let name, role;
//({ name, role } = person); without parentheses would return an error

console.log(name, role);

//using break
for(let i=0; i < 4; i++){
    console.log(i);
    if(i===3){
        break;
    }
}

//using continue
for(let i=0; i < 4; i++){
    if(i==2){
        continue;
    }
    console.log(i);
}

//equality operator
console.log(1 == true); //returns a true since it tries to do the type conversions
console.log(1 === true); //returns a false bse 1 is of type int and true is a string

//unary operator
let year = 1995;
++year;
console.log(year); //logs the incremented year
console.log(year++); //will first log the year then increment it after

console.log(year);

//logical or ||
//if the first of the two values is falsy, it will take the other else the first
let userSettings = null;
let defaultSettings = {name: 'default'};

console.log(userSettings || defaultSettings);

//logical &&
//if && is used, it will check the first and if it is true, 
//will check the second if true, it will take the second
let myUserSettings = {name: 'Apple'};
let myDefaultSettings = {name: 'default'};

console.log(myUserSettings && myDefaultSettings);

//immediately invoked function expression
//function is called right away

let app = (function(){
    console.log('IIFE');
    return {};
})();
console.log(app);

//closure
let app1 = (function(){
    let id = 30;
    let getId = function(){
        return id;
    };
    return {
        getId: getId
    };
})();
console.log(app1.getId());

//constructor function
function Car(id){
    this.carId = id;
    this.start = () => {
        console.log('Car ID is: ' + this.carId);
    };
}

let toyota = new Car(20);
toyota.start();

//iterating through an array
let cars = [
    {carId: 10, style: 'Benz'},
    {carId: 20, style: 'Toyota'},
    {carId: 30, style: 'Subaru'},
];

cars.forEach((car, index) => {
    console.log(car.carId, car.style, index);
});

//filter
let myCar = cars.filter(car => car.style === 'Toyota');
console.log(myCar);

//every, returns true if true in every case
let result = cars.every(car => car.carId > 0);
console.log(result);

//find, find only the element that is matchng
let zaCar = cars.find(car => car.carId > 20);
console.log(zaCar);

//inheritance
class Animal {
    constructor(){
        this.age = '5';
        this.size = 'Large';
    }
    bark(){
        return 'it barks';
    }
}

class Dog extends Animal{
    constructor(){
        super();
    }
}

let myDog = new Dog();
console.log('My dog is ' + myDog.age +' and ' + myDog.bark());

//defining properties
//using defineProperty
var obj = {};

Object.defineProperty(obj, 'name',{
    value: 'my name',
    writable: true,
    enumerable: true,
    configurable: true
});

// alert('Hello Apple, You are amazing!');

//with let reassignment can be done
let age = 40;
age = 100;
console.log(age);

//reassignment is not possible with const
// const number = 20;
// number = 500;
// console.log(number);

//using template strings
const myname = 'Apple';
const myage = 10;

const introduction =`My name is ${myname} and I am ${myage} years old.`;
console.log(introduction);

//to get length using length property
const kwan = myname.length;
console.log(kwan);

const s = 'Apple, Banana, Pineapple, Grapes';
console.log(s.split(', '));

//arrays are variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);
numbers[5] = 6;
numbers.unshift(0); //To add at the start
numbers.push(7); //To add at the end
console.log(numbers);
console.log(Array.isArray(numbers));
console.log(numbers.indexOf(2));

const achie = {
    fname: 'Apple Lurve',
    age2: 10,
    hobbies: ['coding', 'singing'],
    address: {
        street: 'Pala',
        city: 'Kampala'
    }
};
console.log(achie);
console.log(achie.hobbies[1]);
console.log(achie.address.city);

//destructuring
const { fname, age2, address: { city } } = achie;
console.log(city);

//add properties
achie.email = 'achie@gmail.com';
console.log(achie);

//loops|for
for(let a = 1; a <  5; a++){
    console.log(a);
}

//loops|while
let y = 1;

while(y < 10){
    console.log(y);
    y++;
}

// array of objects
const todos = [
    {
        id: 1,
        text: 'Practice JQuery',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Practice Python',
        isCompleted: false
    },
    {
        id: 1,
        text: 'Practice Flask',
        isCompleted: true
    }
];

console.log(todos);

//to convert to json
console.log(JSON.stringify(todos));

//loop through array
for(let x = 1; x < todos.length; x++){
    console.log(todos[x].text);
}

//loop using for of
for(let todo of todos){
    console.log(todo.text);
}

//using forEach, map, filter
//forEach
todos.forEach((todo) => {
    console.log(todo.text);
});

//map-returns an array
const todoText = todos.map((todo) => {
    return todo.text;
});

console.log(todoText);

//filter
const todoCompleted = todos.filter((todo) => {
    return todo.isCompleted === true;
});

console.log(todoCompleted);
