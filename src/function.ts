let function1:()=>void
let function2:(num:number)=>void
let function3:(arr:number[],name:string,obj1:object)=>string
function1=()=>{
  console.log('funtion without perameter')
}
function1()

function2=(num:number)=>{
  console.log(`funtion with single parameter ${num}`)
}
function2(5)

function3=(arr:number[],name:string,obj1:object)=>{
  let sum=0
  for(let item of arr){
      sum+=item
  }
  return `${name} is ${sum} age years old`
}
console.log(function3([45,3,5],'shimul',{id:5}))