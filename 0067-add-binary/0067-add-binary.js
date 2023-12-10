/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

let addBinary = function(a, b) {
    const result = []
    let carry = 0
    let c = a.length -1
    let d = b.length -1
    while ( c >= 0 || d >= 0 || carry != 0) {
        let sum = carry
        if (c >= 0){
            // Convert to an integer.
            sum += parseInt(a[c])
            // Decrese c -> moving to the next position in string a.
            c--
        }
        if (d >= 0){
            // Convert to an integer.
            sum += parseInt(b[d])
            // Decrese d -> moving to the next position in string b.
            d--
        }
        // Convert the result to a string.
        result.push((sum % 2).toString())
        // Calculate the new carry for the next position 
        carry = Math.floor(sum / 2)
    }
    return result.reverse().join('')
};