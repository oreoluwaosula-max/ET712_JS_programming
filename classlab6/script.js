let hourNow = 15;
let greeting;

if (hourNow > 24) {greeting = 'Welcome to the next day'}
else if (hourNow>18) {greeting = 'Good evening!'}
else if (hourNow>12) {greeting = 'Good afternoon!'}
else if (hourNow>0) {greeting = 'Good morning!'}
else {greeting = 'Welcome!'}
document.write('<h2 class="greet">' + greeting + '</h2>')

console.log("Ore-Oluwa Osula")
console.log(greeting)
console.log("Example 1: conversion between data types")
let num1 = prompt("Enter number 1")
num1 = parseInt(num1)
let num2 = parseInt(prompt("Enter number 2"))
let sum = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${sum}`)

console.log("Exercise")
let firstname = prompt("Enter your first name: ")
let age = parseInt(prompt("Enter your age: "))
let language = prompt("Enter your favorite programming language: ")
let favoritehobby = prompt("Enter your favoritehobby:")
console.log(`My name is ${firstname}. I am ${age} years old and my favorite programming language is ${language}. My favorite hobby is ${favoritehobby}.`)
