/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // last index of nums1 and nums2.
    let i = m - 1
    let j = n - 1
    // last index of nums1 + nums2.
    let k = m + n - 1
    
    while (i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            // if nums 1 is greater than nums2, place nums1 i at nums1 k, and decrease both(i,k).
            nums1[k--] = nums1[i--] 
        } else {
            // else place nums2 j at nums1 k, and decrease both(j,k)
            nums1[k--] = nums2[j--]
            }
    }
    // if there are any elements in nums2, we need to trasnfer to nums1
    while (j >= 0){
        nums1[k--] = nums2[j--]
    }
};
