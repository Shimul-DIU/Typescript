// public
class animal {
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
const obj1 = new animal('dog');
obj1.name = 'cat';
obj1.display();
// private access modifire
class student {
    name;
    constructor(name) {
        this.name = name;
    }
    // access private property
    setter(setName) {
        this.name = setName;
    }
    // getter():string{
    //  return this.name
    // }
    display() {
        console.log(this.name);
    }
}
let obj2 = new student('shimul');
// not accessable outside from class
// obj2.name='mustafa'
obj2.setter('mustafa');
// const result:string=obj2.getter()
// console.log(result)
obj2.display();
// protected
class car {
    name;
    constructor(name) {
        this.name = name;
    }
    setter(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
const car1 = new car('bugatti');
// can't access
// car1.name='toyota'
car1.setter('toyota');
car1.display();
class volvo extends car {
    show() {
        console.log(`child class inherit parent car ${this.name}`);
    }
}
const volvo_obj1 = new volvo('toyota');
volvo_obj1.show();
export {};
