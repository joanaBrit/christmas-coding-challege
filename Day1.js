//? Length of Last Word
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {

  return function () {
    return n++
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/
//? hellow world
/**
 * @return {Function}
 */
var createHelloWorld = function () {

  return function (...args) {
    // console.log("Hello World")
    return "Hello World"
  }
};
const f = createHelloWorld();
console.log(f("Hello World")); // "Hello World"
/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/

//? Fibonacci
/**
 * @return {Generator<number>}
 */
let fibGenerator = function* () {
  let current = 0
  let next = 1

  while (true) {
    yield current
    let sum = current + next
    current = next
    next = sum

  }
}

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/
//? Counter
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
  return function() {
      return n++
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/