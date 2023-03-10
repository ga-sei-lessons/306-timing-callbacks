// // console.log("js is linked!")

// // js has 'first class functions'
// // in js a function can be anything

// // making a named function
// function myNamedFunction() {}
// // creating an 'anonymous function' and assigning it to a varaible
// const myAnonFunction = function() {}
// // anontmous arrow function
// const myArrowFunction = () => {}

// function definedFunction() {}

// //addEventListener is a 'higher order function' -- function that is designed to take another function as an argument
// // defined function is a 'callback function' -- passed to a higher order function to be invoked
// // definedFunction()
// // element.addEventListener('click', definedFunction)

// // DIY higher order function
// const higherOrder = function(callback) {
//     // the callback function is invoked
//     callback()
// }

// // a callback funciton
// const callbackFunction = function() {
//     console.log('hello from inside of the callback! 👋')
//     return
// }

// higherOrder(callbackFunction)

// higherOrder(function() {
//     console.log('the anonymous function is being invoked!')
// })

// // TIMING FUNCTIONS (higher order functions)
// // browser API (these come from the window)

// // setInterval(callback function, interval in ms)
// // window.setInterval
// const tick = function() {
//     console.log('tick')
// }

// // if you want and interval to be clear, you have to save it to an interval
// const tickInterval = setInterval(tick, 1000) // 1000ms = 1 second
// console.log('tickInterval', tickInterval)
// // anon function
// // setInterval(function () {
// //     console.log('anon interval')
// // }, 2000)

// // const document = {
// //     // functions that live in obects are called 'methods'
// //     querySelector: function(string) {
// //         // select a dom element as indicated by the string that is passed in
// //     }
// // }


// // setTimeout -- exactly like setInterval except it only runs 1 time
// // window.setTimeout
// const timeout = setTimeout(function() {
//     console.log('the timeout has ran!')
// }, 3000) // in 3 seconds this will run 1 time

// document.querySelector("#stop-tick").addEventListener('click', function() {
//     // window.clearInterval
//     clearInterval(tickInterval) // clearing an interval
//     clearTimeout(timeout) // clearing a timeout
// })

// 1.
// Write a simple greeting function that just prints "Hello!" and save it to a variable. Schedule it to run one time, 5 seconds from now.
const greeting = function() {
    console.log('Hello!')
}

const greetingTimeout = setTimeout(greeting, 5000)

// 2.
// Schedule that same greeting function to run once every one-and-a-half seconds

const greetingInterval = setInterval(greeting, 1500)

// 3.
// Cancel the one-time execution from question 1. (If done correctly, you will never see it print.) Note that to do this, you have to assign the return value of setTimeout to a variable.

clearTimeout(greetingTimeout)

// 4. Cancel the recurring print from question 2. (If done correctly, you will never see it print.) Note that to do this, you have to assign the return value of setInterval to a variable.

clearInterval(greetingInterval)

/* 
5. Use setInterval to write a program that prints the following:
(This should mimic a countdown, so each line will print after a one second delay.)
10
9
8
7
6
5
4
3
2
1
Blast off!
BONUS: How could you mimic the setInterval functionality using setTimeout?
*/

// keep track of the current count
let count = 10

// using a named function to take advantage of 'hoisting' (refering to a function before it is defined)
function countDown() {
    // if the count is greaterthan 0, print the current count and decrement it
    if (count > 0) {
        console.log(count)
        count = count - 1
    } else {
        // otherwise, print blast off and clear the interval
        console.log('Blast off!! 🚀')
        clearInterval(countDownInterval)
    }
}

const s = setInterval(countDown, 1000)

// 1. does it work? 
// 2. is it as readable as possible -- self documenting code
    // 2a. is it maintainable?
    // 2b. is it scalable? 
// 3. is it running efficiently?

// bonus
// let count = 10

// setTimeout(countDown, 1000)

// function countDown() {
//     // if the count is greaterthan 0, print the current count and decrement it
//     if (count > 0) {
//         console.log(count)
//         count = count - 1
//         setTimeout(countDown, 1000)
//     } else {
//         // otherwise, print blast off and clear the interval
//         console.log('Blast off!! 🚀')
//     }
// }
