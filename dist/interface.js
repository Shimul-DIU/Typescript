const students = [];
students.push({
    age: 50,
    roll: 5,
    name: "Shimul",
    isActive: true,
});
console.log(students);
class Car {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    display() {
        return `${this.name}, ${this.price}`;
    }
}
const carObj = new Car("Volvo", 400000);
console.log(carObj.display());
export {};
