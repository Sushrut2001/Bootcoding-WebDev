// Function's
// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,58)

// Ex-2

// function sum(a,b){
//     return a+b
// }
// let result = sum(10,49)
// console.log(result)

// Ex-3

// function greet(name){
//     return `hello ${name}`
// }
// let result = greet("Sushrut")
// console.log(result)

// Ex-4

// function greet(name){
//     return`hello ${name}`
// }console.log(greet("Sushrut"))


// Arrow function

// const print=() =>console.log("Sushrut");
// print()

// Ex-2

// const greet= Name => `Hello, ${Name}`
// console.log(greet("Sushrut"))

// Ex-3

// const sum = (a,b) => console.log(a+b)
// sum(10,24)


// Global scope
// let globalVar = 10
//  let display =() =>{
//     console.log("inside the display fun")
//     console.log("inside the function",globalVar)
    
//  }
//  display()
//  console.log(globalVar);

// Local scope

let localScope = () =>{
    let localVar = "I'm local!"
    console.log(localVar)
    
}
localScope()
