window.onload = function () {
    // 位于运算=>口诀：数据成对出现，单独少一个数据不成双：用位于运算
    /**
     * abc=>var1
     * abcd=>var2
     * so
     * var1 ^ var3 = d
     * 
     * 
     * 
     * 例子2
     * [2,2,2,3,2,2,2,]
     * 用位于运算结果就是3
     * 
     * 例子3
     * 0 ^ 1 ^1^ 2 ^ 2 ^ 3 = 3
     */

    // 136. 只出现一次的数字
    // 面试题 17.04. 消失的数字

};
/**
 * https://leetcode-cn.com/problems/find-the-difference/
 * 389. 找不同
给定两个字符串 s 和 t，它们只包含小写字母。
字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
请找出在 t 中被添加的字母。

示例 1：
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。

示例 2：
输入：s = "", t = "y"
输出："y"

示例 3：
输入：s = "a", t = "aa"
输出："a"

示例 4：
输入：s = "ae", t = "aea"
输出："a"
 */
var findTheDifference1 = function (s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};

/**
 * https://leetcode-cn.com/problems/is-unique-lcci/
 * 面试题 01.01. 判定字符是否唯一
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：
输入: s = "leetcode"
输出: false 

示例 2：
输入: s = "abc"
输出: true
 */
var isUnique = function (astr) {
    var mask = 0;
    for (let index = 0; index < astr.length; index++) {
        var movie_bit = (astr.charCodeAt(index) - 'a'.charCodeAt());
        var lastNumber = 1 << movie_bit;
        var resMask = mask & lastNumber;
        if (resMask !== 0) {
            return false;
        }
        mask = mask | lastNumber;
    }
    return true;
}

/**
 * https://leetcode-cn.com/problems/single-number/
 * 136. 只出现一次的数字
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,1]
输出: 1

示例 2:
输入: [4,1,2,1,2]
输出: 4
 * 
 */
var singleNumber = function (nums) {
    var sig = 0;
    var single = 0;
    for (let index = 0; index < nums.length; index++) {
        single = single ^ nums[index];
    }
    return single;
};
/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
 * 剑指 Offer 56 - I. 数组中数字出现的次数
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

示例 1：
输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]

示例 2：
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
 */
var singleNumbers3 = function (nums) {
    //用于将所有的数异或起来
    var k = 0;
    for (let index = 0; index < nums.length; index++) {
        k = k ^ nums[index];
    }

    //获得k中最低位的1
    var mask = 1;
    //mask = k & (-k) 这种方法也可以得到mask，具体原因百度 哈哈哈哈哈
    while ((k & mask) == 0) {
        mask <<= 1;
    }

    var a = 0;
    var b = 0;
    for (let index = 0; index < nums.length; index++) {
        var num = nums[index];
        if ((num & mask) == 0) {
            a ^= num;
        } else {
            b ^= num;
        }
    }

    return [a, b];
};
/**
 * https://leetcode-cn.com/problems/missing-number-lcci/
 * 面试题 17.04. 消失的数字
数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
注意：本题相对书上原题稍作改动

示例 1：
输入：[3,0,1]
输出：2
 
示例 2：
输入：[9,6,4,2,3,5,7,0,1]
输出：8
 */
// 3 ^ 2 ^ 1 ^ 0 ^ 0 ^ 1 ^ 3  = > 2
// 0 ^ 1 ^ 2 ^ 3 ^ 3 ^ 1 ^ 0
var missingNumber = function(nums) {
    var len = nums.length;
    var res = 0;
    for(let index = 0;index < len;index++) {
        res = res ^ (index + 1);
        res = res ^ nums[index];
    }
    return res;
};