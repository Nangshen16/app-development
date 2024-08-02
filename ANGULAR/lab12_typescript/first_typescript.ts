//explicit type
function greeter(username:string){
    console.log(`Welcome To TypeScript ${username}`)
}

let user = "Nang Shen";
greeter(user);

//implicit type
var y= 12;
console.log(y);

//explicit array(list)
let colors: string[] = ['red', 'blue', 'white']
console.log(colors)

//implicit array
let numbers = [3,-9, 5]
console.log(numbers)

console.log('\n-------------------Example 2:any type-------------------')
//use the any data type: allow all types
let a :any
a = 5;

console.log("a=5", typeof(a))

a = "Peter Pan"
console.log("a = 'Peter Pan' ", typeof(a))

a = false
console.log("a = false", typeof(a))

console.log('\n-------------------Example 3:unknown type-------------------')

let b: unknown
b = 10
console.log("b =10", typeof(b))

b="Martha"
console.log("b= 'Martha'", typeof(b))
b=true
console.log("b =true", typeof(b))

console.log('\n-------------------Example 4:eum type-------------------')
//'enum' is a special class that represents a group or list of constant values( values that cannot be changed)
//enuam can use numerial or string constant
enum Countries {USA, Canada, Mexico}
let USA = Countries.USA
let Canada = Countries.Canada
let Mexico = Countries.Mexico

console.log(`Class object of Canada ${Canada}`)
console.log(`Class object of Mexico ${Mexico}`)
console.log(`Class object of USA ${USA}`)

console.log('\n-------------------Example 5:data type classes-------------------')
//if the data type is explicit , you can directly use the method to the specific data type
let username:string = "Ann Smith"
let characters_username = username.length
console.log(`User ${username} has ${characters_username} characters`)

//if it is an implicit data type, we myst cast it tot the specific data type before applying a method
let firstname = "Luisa"
firstname = <string>firstname
let characters_firstname = firstname.length
console.log(`User ${firstname} has ${characters_firstname} characters`)

console.log('\n-------------------Example 6: return type function-------------------')
function get_time():number{
    return new Date().getHours()
}
console.log(`The time is ${get_time()} h`)

console.log('\n-------------------Example 7: void function-------------------')
//void funtion doesn't return value
function greeting():void{
    console.log('Welcome to Angular Data type!')
}
greeting()
console.log('\n-------------------Example 8: function with parameters-------------------')
function get_sum(num1:number, num2:number,name:string):string{
    let result = name + ", the number is " +(num1+ num2)
    return result
}
console.log(get_sum(2,3, "Nang"))

console.log('\n-------------------Example 9: Optional parameter-------------------')
//the ? operator mark parameter as optional
function sum_total(n1:number, n2?:number){
    if(n2 !== undefined){
        return (n1+n2)
    }else{
        return 0
    }
}

console.log(`The sum is ${sum_total(5,9)}`)
console.log(`The sum is ${sum_total(5)}`)


console.log('\n-------------------Example 10: spread syntax-------------------')
//spread syntax is used to deconstructure an array
function get_average(...n:number[]) : number{
    let total = 0
    let average = 0
    for(let i = 0; i<n.length; i++){
        total +=n[i]
    }
    average = total / n.length
    return average
}
console.log(`The average is ${get_average(10,6,2)}`)



console.log('\n-------------------Example 11: Class-------------------')
class Car{
    //define the data tyoe
    brand:string
    model:string
    year_manufacture: number

    constructor(brand:string, model:string, year_manufacture:number){
        this.brand = brand
        this.model = model
        this.year_manufacture = year_manufacture

    }
    year(){
        console.log(`The car was manufactured at ${this.year_manufacture}`)
    }
}

//create  a modal for class Car
let usercar = new Car('Telsa', 'S', 2023)
//access data of the modal of the car through 'usercar
console.log(`Car brand = ${usercar.brand}`)//accessing brand property
usercar.year() // accessing method year

console.log('\n-------------------Example 12: Inherent Class-------------------')
//inheritance is a name of transfer genetic characteristics by extending from one class to another using keyword 'extends'
class Person{
    save(){
        console.log('Registration Successful')
    }
}

class Customer extends Person{
    sale(){
        console.log('x items was sold')
    }
}

class Employee extends Customer{
    salary(){
        console.log('Salary paid')
    }
}
//create a modal for Pearson
let person1 = new Person
// calling the method save() of the modal person1
person1.save()

//create a modal for customer
let customer1 = new Customer
//calling the methid 'sale() of the modal customer1
customer1.sale()
//calling the inherent method save() througj modal customer1
customer1.save()

//create a model for employee
let employee1 = new Employee
//calling the inherent method to save() through modal employee1
console.log("calling the inherent method 'save()' through model employee1")
employee1.save()




