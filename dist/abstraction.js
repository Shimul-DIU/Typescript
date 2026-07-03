class students {
    name = 'shimul';
    roll;
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}
class student1 extends students {
    mark;
    constructor(mark, name, roll) {
        super(name, roll);
        this.mark = mark;
    }
    display() {
        console.log(this.name, this.roll, this.mark);
    }
}
const s1 = new student1(46, 'sdfd', 7);
s1.display();
export {};
