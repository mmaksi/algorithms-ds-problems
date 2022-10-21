/**
 * 1. Two Sum
 * @@Level__Easy
 */

function twoSum(nums, target) {
  const map = new Map();
  let augend; // left number in the addition

  for (let i = 0; i < nums.length; i++) {
    // set right number in the addition
    let addend = nums[i];
    // change left number in the addition
    augend = target - addend;
    // check if left is existed in the nums array
    if (map.has(augend)) {
      // if true returns indexes of left and right
      return [map.get(augend), i];
    }
    // if false map the iterator to its index
    map.set(addend, i);
  }
}
