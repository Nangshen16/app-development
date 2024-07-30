//import mongoose
const mongoose = require('mongoose')

//connect to MongoDb where student_name is the database
mongoose.connect("mongodb://localhost/students_name")

//check if it is connected
mongoose.connection
//use .once to watch for mongodb to connect the first time when the event ocured 
        .once('open', function(){
            console.log('\n----------connected to mongodb----------')
        })
        //use .on to watch for errore in the connection
        .on('error', function(e){
            console.log("Error connecting"), e
        })

//clear a;ll collections from the students document
beforeEach(function(done){
    mongoose.connection.collections.students.drop()
    done()
})