console.log("\n ----- example 1: local and global variable")
 // global variable
 let msg = 'This is a outside message'

function displaymsg(){
    // local variable
    let msg = 'Hello World'
 }
// calling function
displaymsg()

console.log(msg)

 console.log("\n ----- example 2: constant variable")
 // constant variable are variable whose value cannot be changed later
 const GRAVITY = 9.8
 console.log(GRAVITY)
 // GRAVITY = 9.9  --> the console will show an error  s
 
 console.log("\n ----- example 3: function in a variable")
 const sum = function (num1, num2) {
    return num1 + num2
 }

 // calling function
 let s = sum(2,7)
 console.log(s)

  console.log("\n ----- example 4: arrow function")
  let greet = (n) => {
      console.log(`Welcome to function ${n}`)
  }
  // calling function
  greet("Peter Pan")

    console.log("\n ----- example 5: function calling function")
    // function that randomly generates a number between 1 and 6
    function rolldice() {
        return Math.floor((Math.random()*6) + 1)
    }

    function calltwice() {
        let dice1 = rolldice()
        let dice2 = rolldice()
        console.log(`${dice1} ${dice2}`)
    } 
    // calling function
   calltwice()
   calltwice()
    calltwice()


    console.log("\n ----- example 6: function returns function")
    // function that checks if a num is greater than the min number and less than the max number
    function makebetweenfunction(min, max) {
        return function(num) {
            return num >= min && num <= max
        }
    } 

    let child = makebetweenfunction(3,7)

    console.log(child(10))
    
 console.log("\n ----- example 7: function with default values")
    // functon to roll a dice n times.  n is passed to a function. if n is not passed, then n = 1
    function rollingdice() {
        for(let i = 1; i<n; i++){
           console.log(rolldice())
        }
    }


    console.log("\n ----- example 8: spred syntax ...")
    // spred syntax ... is used to iterate elements from the list
    nums = [3, 9, -6, 10, 1, 0]
    let maxnum = Math.max(...nums)
    console.log(maxnum) 