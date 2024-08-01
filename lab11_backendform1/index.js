//import libaries
const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
//create app using express
const app = express ()

//use the body-parse middleware to handle data sent in the body of http
app.use(bodyParser.json())

//use express to server static files. Any files in the 'public ' folder will be accessible f rom the root URL of the web server
app.use(express.static('public'))
//use express body-parser for parsing URL-encoded request bodies (typically from HTML form)
app.use(bodyParser.urlencoded({extended: true}))


//connect the database using mongoose
//this {useNewUrlParser: true, useUnifiedTopology:true} option to make sure that uses the new Parser and new Server and monitoring engine
mongoose.connect('mongodb://localhost/userlogin',{useNewUrlParser: true, useUnifiedTopology:true})

//check cpnnection 
mongoose.connection
.once('open', function(){console.log('Connected to userlogin database')})
.on('error', function(e){console.log('Error connecting...',e)})

//create checking page
// app.get('/', function(request, response){
//     response.redirect('index.html')
// }).listen(3000)

//posting the form
app.post('/login', async(request, response)=>{
    try{
        //get the data from index.html port
        const username = request.body.username
        const password = parseInt(request.body.password) //password is casted as an integer


        //testing 
        console.log(`Enter username = ${username} and entered
        password = ${password}`)

        //get the data from database, Mongodb, and check if the information, username and password matches
        const user = await mongoose.connection.db.collection('users').findOne({username: username})
            //check  if ifrmation, username pw and matches
            if(!user){
                console.log('Information does not match');

            }
            //check if password matc hes
            if (user.password === password){
                return response.send('Logged in Successfully');
                // console.log('Logged in Successfully');
            }
            
            else{
                return response.send('Password does not match')
                // console.log('password does not match');
            }
            

    
    } catch (error){
       response.status(500).send('Invalid Information!', error)
    }

    
})

//creating checking page
app.get('/', function(request, response){
    response.redirect('index.html')
}).listen(3000)
