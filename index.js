 //This file have the contents about a task in node!

 import { timeStamp } from "console";
import express from "express";
 import * as fs from 'fs'; //file accessing packages

 //initialising express server

 const app = express();
 let time = new Date();
 let datestring = time.toUTCString().slice(0, -4);
 console.log(datestring)

//  const timestamp = `Last created timestamp: ${datestring}`;

//  fs.writeFile("/", timeStamp)


//APIs
 app.get("/", (req, res) => {
    res.send("Hey there,Im working fine!")
 })


 //set server to listen under port 9000!

 app.listen(9000, () => console.log("server started in localhost 9000"))