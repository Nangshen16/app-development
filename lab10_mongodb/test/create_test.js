//import assert. assert is used to compare two Boolan values
const assert = require("assert")
// const {describe } = require("mocha")
//import student schema
const Student = require('../src/students')

//create describe funtion to push testing through Mocha
describe('Create the first date', function(){
    it('Saved the student', function(){
        //create a new student
        const student1 = new Student({name: "Rachel"})

        //read and save the student in the database, Mongo will save the new student in the database
        student1.save()
        //if the student is new, the promise reaches the fullfilled stat and will proceed to create the schema for the next student. otherwise, the promise reaches the rejected state and will procceed to reject line student1.save()
        .then(function(){
            assert(!student1.isNew)
        })
        

    })
})