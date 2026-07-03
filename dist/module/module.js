export const arry = ['shimul', 9, null, NaN, 'akram'];
export const obj = {
    name: 'rasel',
    age: 90,
    location: 'vovanipur'
};
export class Student {
    name;
    roll;
    cgpa;
    passingYear;
    constructor(name, roll, cgpa) {
        this.name = name;
        this.roll = roll;
        this.cgpa = cgpa;
    }
    display() {
        console.log(this.name, this.roll, this.cgpa, this.passingYear);
    }
}
