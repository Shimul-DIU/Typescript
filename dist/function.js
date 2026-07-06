let function1;
let function2;
let function3;
function1 = () => {
    console.log('funtion without perameter');
};
function1();
function2 = (num) => {
    console.log(`funtion with single parameter ${num}`);
};
function2(5);
function3 = (arr, name, obj1) => {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return `${name} is ${sum} age years old`;
};
console.log(function3([45, 3, 5], 'shimul', { id: 5 }));
export {};
