//https://leetcode.com/problems/two-sum/submissions/
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let check = nums.indexOf(target - nums[i]);
        if(check != undefined && check !== i && check >= 0) {
           return [i, check];
        } 
    }
};
