/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**Replit AI
Collaboration
CDE
Deployments
.config
.gitignore
index.js

 * @param {ListNode} head
 * @return {boolean}
 */


/* head of linked list, does have a cycle in it?
if there is a node list that can be reached again = There's a cycle
pos is the index of the node of next pointer.
return true if there's a cycle and false if not.
*/

/*
how to check a cycle? create 2 pointers.
Initialize two pointers, slow and fast, both starting at the head of the linked list.
Iterate through the linked list:
Move the slow pointer one step forward.
Move the fast pointer two steps forward.
Check if the fast pointer reaches the end of the list or if it overlaps with the slow pointer.
If the fast pointer reaches the end of the list, there's no cycle. If it overlaps with the slow pointer, there's a cycle.
*/

var hasCycle = function(head) {
    // Initiate 2 pointers
    let slow = head
    let fast = head
    // loop throw the list 
   while (fast !== null && fast.next !== null){
       // move slow 1 step
       slow = slow.next
       // move fast 2 steps
       fast = fast.next.next
       
       if(slow === fast){
           return true
       }
   }
    return false
}