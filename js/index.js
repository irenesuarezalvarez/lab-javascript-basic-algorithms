// Iteration 1: Names and Input

const hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);

const hacker2 ='Claudia';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops


//3.1 J O H N
let newArray = hacker1.split('');
for (let i = 0; i < newArray.length; i++){
  newArray[i] = newArray[i].toUpperCase();
}
 console.log(newArray.join(' '));


// let separate = hacker1.toUpperCase().split('').join(' ');
// console.log(separate);

//3.2 nhoJ

let reverseOrder = "";
let reverseArray = hacker2.split("");
for (let i = reverseArray.length -1; i>=0; i--){
  reverseOrder = reverseOrder + reverseArray[i];
 }

 console.log(reverseOrder);
//console.log(hacker2.split('').reverse());

//3.3 Lexicographic order

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely. ");
} else {
  console.log("What?! You both have the same name?");
}

