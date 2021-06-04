/* CIT 281 Project 3
Name: Shuxi Wu */

/* validDenomination(coin):
Returns true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100
Must use the array indexOf() method, and !== equality operator
This function can be coded to be a single line of code */

let validDenomination = (coin) => [1,5,10,25,50,100].indexOf(coin) !== -1

/* valueFromCoinObject(obj):
Returns the calculated value of a single coin object from the obj function parameter
Must use object deconstruction to create constant variables denom and count from 
the obj function parameter, using default object values of 0 for denom and count */
let valueFromCoinObject = (obj) => {
    const {denom = 0, count = 0} = obj 
    return denom*count 
}

/* valueFromArray(arr):
Iterates through an array of coin objects and returns the final calculated value of all coin objects
Must use Array.reduce() method, and an arrow function with the Array.reduce() method
Must call valueFromCoinObject()
Extra credit: Handle scenario where the arr function parameter, 
rather than an array of coin objects, contains another array of coin objects */
let valueFromArray = (arr) => {
    return arr.reduce((total, current) => {return total + valueFromCoinObject(current)}, 0) 
}
//use if typeof = array then array[0] etc.

/* coinCount(...coinage):
This function is the only exported function from the code module
Calls and returns the result of valueFromArray() function, 
which will be the value of all coin objects with the coinage array function parameter */
let coinCount = (...coinage) => {return valueFromArray(coinage)}



console.log("{}", coinCount({denom: 5, count: 3}))
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}))
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}]
console.log("...[{}]", coinCount(...coins))
console.log("[{}]", coinCount(coins))

module.exports = {
    coinCount,
    coins
}
