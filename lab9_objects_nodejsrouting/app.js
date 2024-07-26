//import the http module
const http = require("http")
//import the module
const fs = require('fs')

//create server
const server = http.createServer(function(request, response){
    //send the response 
    // response.write("This is the response from the server")
    // response.end("\n----------------end response --------------\n")
    response.writeHead(200, {'Content-Type' : 'text/html'})

    //create router using URL
    const url = request.url

    if(url === "/home" || url === "/" ){
        fs.createReadStream("index.html").pipe(response)
    }
    else if (url === "/about"){
        fs.createReadStream("about.html").pipe(response)

    }
    else{
        fs.createReadStream("404.html").pipe(response)

    }
    // const readStream = fs.createReadStream(__dirname + '/index.html')

    // //pipping create and read the data
    // readStream.pipe(response)
})

//server is listening to port 900
server.listen(3000, function(){
    console.log("Server is running")
})