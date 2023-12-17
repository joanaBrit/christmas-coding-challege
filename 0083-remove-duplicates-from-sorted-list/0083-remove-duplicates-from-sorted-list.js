/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
   
       if (!head || !head.next){
           return head
       }
    // New  list with the first element.
    let newList = new ListNode(head.val)
    let current = newList
   
    // starting from the second element - next head
    while (head.next) {
        // Compare the current element with the next one.
        if(head.val !== head.next.val){
          // If they're different, add the next element to the new list.
            current.next = new ListNode(head.next.val)
            current = current.next
        }
        head = head.next
    }
    return newList
};
    