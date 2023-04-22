//This file explains about sending the response and listening to the server port!

import express from "express"; //importing the installed express package to create a server for nodejs

//Initializing express server as shown below

 const app = express()

//The following three lines depicts get request!

 app.get("/", (req, res) => {
res.send("Hey there, Im working good!")
 })

 //In the above three lines of get request code, the first parameter passed is the url and the second parameter is the 
 //callback function. The call back function contains two parameters namely request(req) and response(res).In the above
 //code, we are sending only response as shown above.

 //since app is assigned to express in line 5, we are using the app for all the following operations like 
 //sending request(line 9), listening to the server(line 24), etc,.

 //Now the above response must be listened somewhere in a server port. Let us now create a port to receive the 
//  above response to listen it! This step is shown in the below piece of code.

//Here in the below piece of code, two arguments are passed! The first one is the 9000 which is the server port
//we are assigning to listen to the backend server response.


app.listen(8000, () => console.log("server started in local host 8000!"))

// NOTE: In the above piece of Code, press ctrl+c to close the server localhost(eg: localhost:8000) 
// which is running after executing the above line!

//It will be inconvinient for us to always kill the server manually by pressing ctrl+c. To overcome this inconvinience,
//there is a package called nodemon. We have to install it.We can check it in package.json file whether it is installed.

//This package of nodemon wont work just being installed! For this, we have to enter "start":"nodemon index.js"
//in the package.json file inside the scripts which can be seen in package.json file.

//Now on entering npm start, the port will be activated and if any change is done in the content of the page, we need not 
//to kill the host and restart it.Instead,the server will reload automatically without being killed manually!