export const arry=['shimul',9,null,NaN,'akram']
export const obj={
  name:'rasel',
  age:90,
  location:'vovanipur'
}

export class Student {
    name:string;
    roll:string;
    cgpa:string;
    passingYear?:string;
    constructor(name:string, roll:string, cgpa:string) {
        this.name = name;
        this.roll = roll;
        this.cgpa = cgpa;
    }
    display() {
        console.log(this.name, this.roll, this.cgpa, this.passingYear);
    }
}
