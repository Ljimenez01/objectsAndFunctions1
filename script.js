//function constructor
/*
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
     
}
//inheritance - objects have access to this function because it is in their
//prototype
Person.prototype.calculateAge = function (){
    console.log(2019 - this.yearOfBirth)
}

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jennifer', 1977, 'Make Up Artist');

var bacchus = new Person ('Bacchus', 1977, 'glass engraver');

john.calculateAge();
jane.calculateAge();
bacchus.calculateAge();
*/

/*

//object.create
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var bacchus = Object.create(personProto,
{
    name: {value : 'Bacchus'},
    yearOfBirth: { value: 1977},
    job: { value: 'glass engraver'}
});

*/

//primitive vs objects

/*two variables holding primitives are actually two different things
because each varibale has its own value
this will console log 23 for b and 46 for a because it was changed after*/


var a = 23;
var b = a;

a = 46; 

console.log(a);
console.log(b);

/*now we are doign the same but with 'objects'
this will console log 30 for both variables 
becasue the referece points to the first object - it is just
a reference. unlike the expample above; they do not have 
their own value*/

//objects

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//function

/*when we pass a primitive to a function, only a copy is created
but when we pass an object; we do NOT pass the object but only the 
reference*/

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}
change(age, obj);
console.log(change);
console.log(age);
console.log(obj.city);