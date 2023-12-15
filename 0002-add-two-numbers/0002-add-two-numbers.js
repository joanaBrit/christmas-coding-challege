/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Non-empty / non-negative: need to contain at least one element.
// Each node contains a single digit 0 <= l1 or L2 < 10.

let addTwoNumbers = function(l1, l2) {
    let carry = 0
    let sum = []
    let pointer1 = l1
    let pointer2 = l2
    
    while (pointer1 !== null || pointer2 !== null || carry == 1){
        // Pointers are not guaranteed to be not null
        // Using optional chaining and nullish coalescing operators
        let digitSum = (pointer1?.val ?? 0) + (pointer2?.val ?? 0) + carry
        carry = 0
        
        if (digitSum >= 10) {
            digitSum -= 10
            carry = 1
        }
        
        sum.push(new ListNode(digitSum, null))
        if (pointer1) {pointer1 = pointer1?.next}
        if (pointer2) {pointer2 = pointer2?.next}
    }
                       
    // Process each digit's node to link them
    sum.forEach((digitNode, i)=> {
        const isLastNode = i == sum.length -1
        if (!isLastNode) {
            digitNode.next = sum[i+1]
        }
    })
    
    // Return the first node in the result linked list
    return sum[0]
};
        
