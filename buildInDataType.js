"use strict";
const age = 234;
const roll = Number('45');
console.log(typeof (roll));
let isStudent = true;
let value;
let firstName = 'MD';
let lastName = 'Shimul';
let isEmployee;
let fullName = firstName.concat(lastName);
function Student() {
    console.log('roll is 5');
}
Student();
console.log(`first name ${firstName}\n`);
console.log(`last name ${lastName}\n`);
console.log(`full name ${fullName}\n`);
console.log(`split name ${fullName.split(' ')}\n`);
console.log(` age ${age}\n`);
console.log(` roll ${roll}\n`);
