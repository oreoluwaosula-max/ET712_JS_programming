console.log("Ore-Oluwa Osula")
console.log("\n ----- example 1: intro to function")
// define a function that prints from 3 to 1
function printcount () {
    for(let num = 3; num>=1 ; num--){
        console.log(num)
    }
}
console.log("\n ----- example 2: function with parameters")
// function  that prints a name. The name is passed to the function
function greeting(name){
    console.log(`Good affernoon ${name.toUpperCase()}`)
}

console.log("\n ----- example 3: function with parameters")
// function that prints a message that starts with number 1 all the way up to the stopnumber
// the stopnumber and the message are passed to function
function greetcount(msg, stopnumber){
    for(let n = 1; n<=stopnumber ; n++){
        console.log(`${msg} ${n}`)
    }
}

console.log("\n ----- example 4: function with parameters")
// function that prints 'snake's eyes' if two number are 1
function snake(n1, n2){
    if(n1===1 && n2 ===1){
        console.log("snake's eyes")
    }
else{
    console.log("not snake'snake's eyes")
}
}
console.log("\n ----- example 5: function that returns value")
// functiont that calculates the area of square and returns the calculated area
function areasquare(side){
    console.log("Calculate area of a square with side", side)
    return side*side
    console.log("The area is ", side*side)
}
console.log("\n ----- example 6: function that returns a Boolean value")
// function that returns 'true' if the temperature is greater than 75
// otherwise, it returns 'false'
// the temperature is passed to the function
function checktemperature(t){
    if(t>75)
        return true
    else
        return false
}

console.log("\n ----- example 7:JS built-in Math function ")
const PI = Math.PI
console.log(PI)
console.log(`Round PI = ${Math.round(PI)}`)
console.log(`Ceil PI = ${Math.ceil(PI)}`)
console.log(`Floor PI = ${Math.floor(PI)}`)
console.log(`power 2^5 = ${Math.pow(2,5)}`)
console.log(`square root of 81 = ${Math.sqrt(81)}`)
console.log(`random numbers = ${Math.random()}`)
console.log(`Return a random number between 1 and 9 ${Math.random(Math.random()*9)}`)

console.log("\n ----- example 8:JS built-in Math function ")
// function that will randomly pick a color from an array
let colors = ['blue', 'green', 'organ', 'pink', 'yellow']

function pickindex(lastindex){
    let random_index = Math.floor(Math.random()*lastindex)
    return random_index
}
let index = pickindex(colors.length)
console.log(`testing index = ${index}`)
let pickcolor = colors[index]
console.log(` Randomly picked color = ${pickcolor}`)