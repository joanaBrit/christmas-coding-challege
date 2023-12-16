/**
 * @param {number} n
 * @return {number}
 */
// It take n stepts to reach the top.
// time he climbs just 1 step.
// time he climbs 2 steps.
// time he climbs mixing steps.
// Fibonacci Fib(n) = Fib(n-1)+Fib(n-2)

const climbStairs = function(n) {
    if (n == 1 || n == 0) return 1
    
    let first = 1
    let second = 2
    
    for (let i = 3; i <= n; i++){
        let third = first + second
        first = second
        second = third
    }
        
    return second
};