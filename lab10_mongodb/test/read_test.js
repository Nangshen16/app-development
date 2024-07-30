//import t
const assert = require('assert')
const Student = require('../src/students')
const { describe } = require('mocha')

describe('Read the data', function(){
    let student1, student2

    beforeEach(function(done){
        student1 = new Student({name: "Rachel"})
        student2 = new Student({name: "Quincy"})
        student1.save()
        student2.save()
        .then(function() {done()})
    })

    it('Find all students with name Quincy', async()=>{
        const students = await Student.findOne({name: "Quincy"})
        console.log(students)
        console.log(students._id)

    })
})