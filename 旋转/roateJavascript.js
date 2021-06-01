window.onload = function () {
    //  一文带你刷遍二分查找（视频+绘图）
    // https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/yi-wen-dai-ni-shua-bian-er-fen-cha-zhao-dtadq/
};
/**
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * 剑指 Offer 58 - II. 左旋转字符串
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：
输入: s = "abcdefg", k = 2
输出: "cdefgab"

示例 2：
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
 */
var reverseLeftWords = function (s, n) {
    return s.slice(n, s.length) + s.slice(0, n);
};


/**
 * https://leetcode-cn.com/problems/rotate-array/
 * 189. 旋转数组
 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
进阶：
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 
示例 1:
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
*/
var rotate = function (nums, k) {
    if (nums.length == 0) return;
    var newRes = [];
    for (let index = 0; index < nums.length; index++) {
        newRes[(index + k) % nums.length] = nums[index];
    }
    for (let index = 0; index < newRes.length; index++) {
        nums[index] = newRes[index];
    }
};
/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 33. 搜索旋转排序数组
整数数组 nums 按升序排列，数组中的值 互不相同 。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

示例 1：
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4

示例 2：
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1

示例 3：
输入：nums = [1], target = 0
输出：-1
 */
var search = function (nums, target) {
    let len = nums.length;
    if (0 == len) return -1;
    if (1 == len) return nums[0] == target ? 0 : -1;
    var left = 0, right = len - 1;
    while (left <= right) {
        var mind = parseInt((left + right) / 2);
        if (nums[mind] == target) return mind;
        if (nums[0] <= nums[mind]) {
            //[4,5,6,7,0,1,2] => target = 6
            if (nums[0] <= target && target < nums[mind]) {
                right = mind - 1;
            } else {
                //[4,5,6,7,0,1,2] => target = 0
                left = mind + 1;
            }
        } else {
            //[6,7,1,2,3,5] => target = 2
            if (nums[mind] < target && target <= nums[len - 1]) {
                left = mind + 1;
            } else {
                //[6,7,1,2,3,5] => target = 7
                right = mind - 1;
            }
        }
    }
    return -1;
};
/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * 35. 搜索插入位置 
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0 
 */
var searchInsert = function (nums, target) {
    var len = nums.length;
    var left = 0;
    var right = len - 1;
    while (left <= right) {
        var mind = parseInt((left + right) / 2);
        if (nums[mind] == target) return mind;
        if (target < nums[mind]) {
            right = mind - 1;
        } else {
            left = mind + 1;
        }
    }
    return left;
};
