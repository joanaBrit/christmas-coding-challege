/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
// function expect takes any value
// function expect return 2 objects
    
    return{
    toBe: function(expectedval){
        if(val === expectedval){
            return true
        }else{
            throw new Error("Not Equal")
        }
    },
    notToBe: function(notexpectedval){
        if(val !== notexpectedval){
            return true
        }else {
            throw new Error("Equal")
        }
     }
  }
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */