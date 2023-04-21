 import express from "express"; //importing the installed express package to create a server for nodejs

//Initializing express server as shown below

 const app = express()

//The following three lines depicts get request!

 app.get("/", (req, res) => {
res.send("Hey there, Im working fine!")
 })

 //In the above three lines of get request code, the first parameter passed is the url and the second parameter is the 
 //callback function. The call back function contains two parameters namely request(req) and response(res).In the above
 //code, we are sending only response as shown above.

 //since app is assigned to express in line 5, we are using the app for all the following operations like 
 //sending request(line 9), listening to the server(line 24), etc,.

 //Now the above response must be listened somewhere in a server port. Let us now create a port to receive the 
//  above response to listen it! This step is shown in the below piece of code.


app.listen(9000, () => console.log("server started in local host 9000!"))