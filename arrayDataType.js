"use strict";
/* // let arr: string[];
let arr:Array<string>
arr=['shimul','mustafa','rifat']
console.log(arr[1])

let info:(string|Number)[]=['shimul',0]
info.push(8)
console.log(info)
info.pop()
console.log(info)
console.log(info.unshift('first'))
console.log(info)
console.log(info.shift())
console.log(info)
let newarry=info.map((item)=>{
   return item+' mia'
})
console.log(newarry) */
let multipleDataType = [];
multipleDataType.push('shimul', 7, true);
console.log(multipleDataType);
multipleDataType.unshift(0);
console.log(multipleDataType);
multipleDataType.shift();
console.log(multipleDataType);
multipleDataType.pop();
console.log(multipleDataType);
// add
multipleDataType.splice(1, 0, 'mustafa', 'akram', 45, 0, true);
console.log(multipleDataType);
// remove
const removeItems = multipleDataType.splice(4, 2);
console.log(removeItems);
console.log(multipleDataType);
// replace
multipleDataType.splice(0, 1, 'nime');
console.log(multipleDataType);
multipleDataType.splice(-2, 0, 67);
console.log(multipleDataType);
// slice
const sliceItem = multipleDataType.slice(1, 3);
console.log(sliceItem);
console.log(multipleDataType.indexOf(45));
console.log(multipleDataType.indexOf(0));
