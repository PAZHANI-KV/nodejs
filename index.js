const fs = require("fs") //This line is for file accessing packages
// const { config } = require("process")

// console.log("working");

// const sum = (num1, num2) => {
// return num1 + num2
// }
// console.log(sum(5, 10))
// console.log("The additionm of number is", sum(5, 15))

//command line arguments

// console.log("command line argument", process.argv)

//following piece of code is an example of implementing process.argv in the code and getting the input for the
//code in the terminal iteslf and getting the corresponding output in terminal!

// const [, , n1, n2] = process.argv

//In the above line the first two spaces inside thw array is left emptied because in process.argv the first two indexes 
//in array will be occupied by the information about the path way of the corresponding file in which we are doing coding!

// const addition = (num1, num2) => {
//     return num1 + num2
// }
// console.log("The addition of number is", addition(+n1, +n2))

//in the above line we are adding + before the values as the values will be in string form in the array of process.argv!
//hence, we are parseinting them by adding a + before the values!

//the following piece of code is another example for giving the input in the terminal itself using process.argv
//and getting the corresponding output!


// const [, , name] = process.argv

// console.log(`Hi ${name}, welcome to guvi!`)


// following piece of code shows file reading capability of node.js which is an inbuild property of node.js.For this,
//the line 1 of code in this file is mandatory!

//The following is the syntax example of the capability of nodejs to read a file which exists in the local system!

//In the below piece of code, fs is a class. so we are accessing the readfile in fs by using the .(dot) function of a 
//class.Here the three arguments we pass are the directory or path of the file ,then we are mentioning the standard 
//of the file whose standard is utf-8, and finally the third argument we are passing is a call back function.

//NOTE: In the following callback argument in the nodejs, the first argument in callback must always be a error
//identifiying argument in callback!

// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(error)
//     } else {
//         console.log("file read successfully")
//     }

//     console.log(data);
// })

//The following piece of code is as same as the above in the case of reading the file. Here the difference is that the 
//inputs n1 and n2 itself are taken from the config file by tracing the filepath. Here the argument for the process.argv
//is given as filepath commonly and it is applied as input using `${}`. so that the input can be given dynamically!.  
//This is the example of how industries are using this read file method in node.js to dynamically get the input  
//from other file and run the function!

//For the below piece of code we have to give the command in terminal as "node index.js config.json".This is because we have mentioned 
//filepath commonly rather than mentioning config.json specifically to use it dynamically for all files. Hence, we have to mention the name 
//of the file in the terminal while running the code

const [ , , filepath] = process.argv

let config

const sum = (num1, num2) => {
    return +num1 + +num2
}

fs.readFile(`./${filepath}`, "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log("file read successfully")
        console.log(typeof (data))
        config = JSON.parse(data) 
        console.log(config)
        console.log("The addition of number is", sum(config.a, config.b))
    }
})
 