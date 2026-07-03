const age:Number=234
const roll : Number=Number('45')
console.log(typeof(roll))
let isStudent:boolean=true
let value:undefined
let firstName:string='MD'
let lastName:string='Shimul'
let isEmployee:null
let fullName:string=firstName.concat(lastName)

function Student():void{
    console.log('roll is 5')
}
Student()
console.log(`first name ${firstName}\n`)
console.log(`last name ${lastName}\n`)
console.log(`full name ${fullName}\n`)
console.log(`split name ${fullName.split(' ')}\n`)
console.log(` age ${age}\n`)
console.log(` roll ${roll}\n`)
