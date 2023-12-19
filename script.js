// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let x1=userInput[0].split(" ").map(Number)[0];
let x2=userInput[0].split(" ").map(Number)[1];
  
let y1=userInput[1].split(" ").map(Number)[0];
let y2=userInput[1].split(" ").map(Number)[1];

let w1=userInput[2].split(" ").map(Number)[0];
let w2=userInput[2].split(" ").map(Number)[1];

let z1=userInput[3].split(" ").map(Number)[0];
let z2=userInput[3].split(" ").map(Number)[1];

let xy=Math.sqrt(((y1-x1)*(y1-x1))+((y2-x2)*(y2-x2)));

let yw=Math.sqrt(((w1-y1)*(w1-y1))+((w2-y2)*(w2-y2)));

let wz=Math.sqrt(((z1-w1)*(z1-w1))+((z2-w2)*(z2-w2)));

let zx= Math.sqrt(((x1-z1)*(x1-z1))+((x2-z2)*(x2-z2)));

if(xy == yw && yw == wz && wz == zx && zx == xy){
    


  console.log("yes");
}
else{
    console.log("no");
}

  //end-here
});