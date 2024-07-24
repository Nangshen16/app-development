console.log('Welcome to NodeJs by Nang Shen')
console.warn('Warning! The file might be corrupted')
console.error('Syntax Error! Check spelling')
console.trace("Trace error in line")

//global object is console
console.log('--------Example 2: Global Object, timer---------')
setTimeout(()=>{console.warn('Time is over')}, 3000)

let count = 9
//every step 
const timer= setInterval(()=>{
    console.log(`Counting ${count}`)
    count -= 1
    if (count == 0){
        clearInterval(timer)

    }
},20)
console.log('--------Example 3: check or print directory or file ---------')
console.log(`Current directory ${__dirname}`)
console.log(`Current file ${__filename}`)

console.log('--------Example 4: working with different module---------')
//import the module
const name = require('./mod')
//call the module 
console.log(name.helper("Martha"))
console.log(name.id(123))
console.log(name.email('nhom@mdc.edu'))

console.log('\n -----Example 5: Nodejs event module---------')
//import node js module events
const events = require ('events')
//use constructor 'new' to create an object of events
const eventEmitter = new events.EventEmitter()
eventEmitter.on('test', function(e){
    console.log(e)

}
)
//emit helps to pass the testing the data
eventEmitter.emit('test', 'EVENT EMITTERD IN NODEJS')
console.log('\n -----Example 6: read file in nodejs---------')
const fs = require('fs')
//create file and read 
fs.readFile('readmore.txt', 'utf-8', function(error, data){
    console.log(data)
    console.log(`Error = ${error}`)
})

console.log('\n -----Example 7: write file in nodejs---------')
//create string and write something
let info = "This file has three names: \n1. Quincy\n2. Sam\n3. Mark"
fs.writeFile('readmore.txt', info, function(error){
    if(error){
        console.log(error)
    }
})

console.log('\n -----Example 8: append data into an existing file in nodejs---------')
fs.appendFile("user_emails.txt", info, function(error){
    if(error){console.log(error)}
})

console.log('\n -----Example 9: remove file in nodejs---------')
fs.unlink('user_emails.txt', (error) =>{
    if(error){console.log(error)}
})

console.log('\n -----Example 10: create file in nodejs---------')
//writeFile(), appendFile(),.open()
fs.open('newfile.txt', 'w', function(err){
    if(err){console.log(err)}
    else{console.log('File saved!')}
})


console.log('\n -----Example 11: create directory in nodejs---------')
fs.mkdirSync('new_directory')
