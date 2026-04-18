"use strict";
// let arr: string[];
let arr;
arr = ['shimul', 'mustafa', 'rifat'];
console.log(arr[1]);
let info = ['shimul', 0];
info.push(8);
console.log(info);
info.pop();
console.log(info);
console.log(info.unshift('first'));
console.log(info);
console.log(info.shift());
console.log(info);
let newarry = info.map((item) => {
    return item + ' mia';
});
console.log(newarry);
