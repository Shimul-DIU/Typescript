class Student{
  name:string
  roll:number
  cgpa:number
  passingYear?:number
  constructor(name:string,roll:number,cgpa:number){
    this.name=name
    this.roll=roll
    this.cgpa=cgpa
  }
   display():void{
    console.log(this.name,this.roll,this.cgpa,this.passingYear)
  }
}
let student1=new Student('shimul',7,8.09)

student1.passingYear=2026
student1.display()
let student2=new Student('mustafa',8,9.09)
student2.display()