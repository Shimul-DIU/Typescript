interface Student {
  age: number;
  roll: number;
  name: string;
  isActive: boolean;
}
const students: Student[] = [];
students.push({
  age: 50,
  roll: 5,
  name: "Shimul",
  isActive: true,
});
console.log(students);

interface Design {
  display(): string;
}
class Car implements Design {
  constructor(
    public name: string,
    public price: number
  ) {}

  display(): string {
    return `${this.name}, ${this.price}`;
  }
}

const carObj = new Car("Volvo", 400000);

console.log(carObj.display());