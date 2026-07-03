class students {
    name;
    roll;
    cgpa;
    constructor(name, roll, cgpa) {
        this.name = name,
            this.roll = roll,
            this.cgpa = cgpa;
    }
    display() {
        console.log(this.name, this.roll, this.cgpa);
    }
}
class students1 extends students {
    passingYear;
    location;
    constructor(year, divition, name, roll, cgpa) {
        super(name, roll, cgpa);
        this.passingYear = year;
        this.location = divition;
    }
    display() {
        console.log(this.name, this.roll, this.cgpa, this.passingYear, this.location);
    }
}
let s1 = new students1(2029, 'mymensingh', 'shimul', 65, 4.65);
let s2 = new students1(2026, 'dhaka', 'mustafa', 65, 4.65);
s2.display();
s1.display();
export {};
