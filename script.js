// console.log("js is linked!")

// js has 'first class functions'
// in js a function can be anything

// making a named function
function myNamedFunction() {}
// creating an 'anonymous function' and assigning it to a varaible
const myAnonFunction = function() {}
// anontmous arrow function
const myArrowFunction = () => {}

function definedFunction() {}

//addEventListener is a 'higher order function' -- function that is designed to take another function as an argument
// defined function is a 'callback function' -- passed to a higher order function to be invoked
// definedFunction()
// element.addEventListener('click', definedFunction)

// DIY higher order function
const higherOrder = function(callback) {
    // the callback function is invoked
    callback()
}

// a callback funciton
const callbackFunction = function() {
    console.log('hello from inside of the callback! 👋')
    return
}

higherOrder(callbackFunction)

higherOrder(function() {
    console.log('the anonymous function is being invoked!')
})

// TIMING FUNCTIONS (higher order functions)
// browser API (these come from the window)

// setInterval(callback function, interval in ms)
// window.setInterval
const tick = function() {
    console.log('tick')
}

// if you want and interval to be clear, you have to save it to an interval
const tickInterval = setInterval(tick, 1000) // 1000ms = 1 second
console.log('tickInterval', tickInterval)
// anon function
// setInterval(function () {
//     console.log('anon interval')
// }, 2000)

// const document = {
//     // functions that live in obects are called 'methods'
//     querySelector: function(string) {
//         // select a dom element as indicated by the string that is passed in
//     }
// }


// setTimeout -- exactly like setInterval except it only runs 1 time
// window.setTimeout
const timeout = setTimeout(function() {
    console.log('the timeout has ran!')
}, 3000) // in 3 seconds this will run 1 time



document.querySelector("#stop-tick").addEventListener('click', function() {
    // window.clearInterval
    clearInterval(tickInterval) // clearing an interval
    clearTimeout(timeout) // clearing a timeout
})