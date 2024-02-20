// // read fron an external file


const fs = require ('fs')

// //console.log(typeof fs)

// // Read in the sync way

// console.log("Before starting to red")

// const content = fs.readFileSync("input.txt")

// // Reading in the async way
// const fs = require('fs');

// fs.readFile('input.txt', (err, content) => {
//     if (err) {
//         return console.error(err);
//     }

//     // console.log("Output content is: " + content);

//     console.log("Last line");
// });





// Write the code  to write to an external file

console .log("Before")

//fs.writeFileSync('output1.txt','Hello Students!')

fs.writeFile('output2.txt',"Hello Sonu again!",err => {
    if(err){
        return console.log(err)
    }
    console.log('Written Successfully !')
})

console.log("alert")