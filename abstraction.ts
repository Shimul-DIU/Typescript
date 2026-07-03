abstract class students{
  name:string='shimul';
  roll:number

  constructor(name:string,roll:number){
    this.name=name
    this.roll=roll
  }
  abstract display():void
}
class student1 extends students{
  mark:number
  constructor(mark:number,name:string,roll:number){
    super(name,roll)
    this.mark=mark
  }
   display():void{
    console.log(this.name,this.roll,this.mark,)
   }
}
const s1=new student1(46,'sdfd',7)
s1.display()