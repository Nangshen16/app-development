//July 25, JS object 
//example 1: Intro to Object
//create an object for student with properties of name,age, and email
let student1 = {
    name : "Sam Altman", age:38, school:"QCC"

}
//retrieve information in an object using squared bracker"
console.log(student1["name"])

//retrive information using the dot
console.log(student1.school)

//update data in an object using the dot or squared backert notattion
// call the object first
student1.age = 30
student1["school"] = "NYU"
console.log(`Update age ${student1.age}`)
console.log(`Update school ${student1.school}`)


//example 2: NESTED OBJECT and array within an object
console.log("\n ---------- example 2 ---------------")
let user1 = {
    name: "Martha",
    age: 80,
    //an array as property
    friends : ["Wendy", "Carl", "Sam"],
    //an object as property
    favorite : {
        food : "cake",
        color: "green"
    }


   
}
 //access key inside an object
 let favorite_food = user1.favorite.food
 console.log(`${user1.name} favorite food is ${favorite_food}`)


 //access an item inside an array
 let second_friend = user1.friends[1]
 console.log(`${user1.name} second friend is ${second_friend}`)


//example 3: ARRAY LIST AS OBJECT
console.log("\n------------------Example 3----------------")
//we can alos create an array with object as list items
let schedule = [
    {
        day: "Monday",
        plan: "Go to yoga class",
        time: "6:30pm"
    },

    {
        day: "Tuesday",
        plan: "Complete bootcamp labs",
        time: "11pm"
    }
]
//access the plan for Tuesday
console.log(`The plan for Tuesday is ${schedule[1].plan}`)

//Object method
console.log("\n------------------Example 4----------------")

let items = {
    //properties
    id : 123,
    name : "pencil",                 
    quanity : 200,
    color: ['red', 'black', 'blue'],
    //methods
    sale : function(){
        return "SALE! 50% off"
    },
    //specific quantity 
    quatity_cart: function(e){
        return this.quanity -= e
        
    }

}
//access sale() method
console.log(`The of ${items.name} is ${items.sale()}`)

console.log(`The remaining quantity of ${items.name} is ${items.quatity_cart(5)}`)

// JSON , JS Object Notification, is a popular text format that is used to store and exchange data
//JSON data is stored as comma-separated list of key:value pairs within a JSON object
//We can convert a JS object to json object by using the Json.stringify() method

//we can also convert from JSON object to JS object using 'JSON.parse() method

let fashionshow = {
    category: "fashion",
    models : [
        {
            name :"Alice",
            age: 21,
            city: "NYC"
        },
        {
            name: "Kelly",
            age: 23,
            city:"Paris"
        }
    ]
}

//print the object 'fashion show
console.log("\n----------Example 5-----------")
console.log(fashionshow)

//create a JSON version of the JS object
let json_fashionshow = JSON.stringify(fashionshow)
console.log("JSON version: ")
console.log(json_fashionshow)

