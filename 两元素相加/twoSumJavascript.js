window.onload = function () {
    //989. 数组形式的整数加
    // 2. 两数相加
    // 66. 加一
    // 415. 字符串相加

}


/**
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 * 989. 数组形式的整数加
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
示例 1：
输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234

示例 2：
输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455

示例 3：
输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021

示例 4：
输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000
 */
var addToArrayForm = function(num, k) {
    let numLen = num.length - 1;
    var res = [];
    var carry = 0;
    while(numLen >=0 || k != 0) {
        var lv = numLen < 0 ? 0 : num[numLen];
        var rv = k == 0 ? 0 : Math.floor(k % 10);
        var sum = lv + rv + carry;
        res.push(sum % 10);

        numLen--;
        carry = Math.floor(sum / 10);
        k = Math.floor(k / 10);
    }
    if(carry == 1) {
        res.push(1);
    }
    return res.reverse();
};

/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 2. 两数相加
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 */
var addTwoNumbers = function(l1, l2) {
    let pre = new ListNode(0);
    let cur = pre;
    var carry = 0;
    while(l1 != null || l2 != null) {
        var x = l1 == null ? 0 : l1.val;
        var y = l2 == null ? 0 : l2.val;
        var sum = x + y + carry;
        // 注意小数点保留
        carry =  Math.floor(sum / 10);
        sum = Math.floor(sum % 10);
        
        cur.next = new ListNode(sum);
        cur = cur.next;
        if(l1 != null)
            l1 = l1.next;
        if(l2 != null)
            l2 = l2.next;
    }
    if(carry == 1) {
        cur.next = new ListNode(carry);
    }
    return pre.next;
};


/**
 * https://leetcode-cn.com/problems/plus-one/
 * 66. 加一
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。

示例 2：
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。

示例 3：
输入：digits = [0]
输出：[1]
 */
var plusOne = function(digits) {
    for(let index = digits.length - 1;index >= 0;index--) {
        digits[index]++;
        digits[index] = digits[index] % 10;
        if(digits[index] != 0) {
            return digits;
        }
    }
    /**
     * shift()	删除并返回数组的第一个元素。
     * unshift()向数组的开头添加一个或更多元素，并返回新的长度。
     */
    digits.unshift(1);
    return digits;
};

/**
 * https://leetcode-cn.com/problems/add-strings/
 * 415. 字符串相加
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 */
var addStrings = function(num1, num2) {
    var lc = num1.length - 1;
    var rc = num2.length - 1;
    var carry = 0;
    var  res = [];
    while(lc >= 0 || rc >= 0){
        var lv = lc < 0 ? 0 : parseInt(num1[lc]);
        var rv = rc < 0 ? 0 : parseInt(num2[rc]);
        var sum = lv + rv + carry;
        res.push(sum % 10);
        carry = Math.floor(sum / 10);
        lc--;
        rc--;
    }
    if(carry == 1){
        res.push(1);
    }
    console.log(res);
    return res.reverse().join('')
};

