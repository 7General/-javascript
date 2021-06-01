window.onload = function () {

    /***
     * https://leetcode-cn.com/problems/remove-duplicate-letters/solution/yi-zhao-chi-bian-li-kou-si-dao-ti-ma-ma-zai-ye-b-4/
     * 注意查看，去除重复字母
     */
    // reverseWords();
    removeDuplicateLetters('bcabc');
    //415. 字符串相加
    // 剑指 Offer 48. 最长不含重复字符的子字符串
};
/**
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 * 剑指 Offer 58 - I. 翻转单词顺序
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

示例 1：
输入: "the sky is blue"
输出: "blue is sky the"
示例 2：
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 */
var reverseWords = function (s) {
    var resStr = '';
    var resAry = s.split(' ');
    for (var index = resAry.length - 1; index >= 0; index--) {
        var item = resAry[index];
        // 过滤为空的元素
        if (item === '') {

        } else {
            // 集合元素信息
            resStr = resStr + item;
            if (index != 0) {
                // 非空元素信息添加空格，如果字符前面有空格，最后会导致有一个多余的空格
                resStr += ' ';
            }
        }
    }
    var lastStr = resStr[resStr.length - 1];
    if (lastStr == ' ') {
        return resStr.slice(0, resStr.length - 1);
    }
    return resStr
};

var reverseWordsError = function (s) {
    // 如果字符中间有空格，会出现问题
    var input = s;
    var right = input.length - 1;
    while (right >= 0 && input[right] === ' ') {
        right--;
    }
    var left = 0;
    while (left <= input.length && input[left] === ' ') {
        left++;
    }
    var newStr = input.slice(left, right + 1);
    return newStr.split(' ').reverse().join(' ');
}
/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 20. 有效的括号
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 
示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true
 */
var isValid = function (s) {
    var stackStr = [];
    var varMaps = { '(': ')', '{': '}', '[': ']' };
    for (var index = 0; index < s.length; index++) {
        var item = s[index];
        if (varMaps[item] != null) {
            // 入栈
            stackStr.push(item);
        } else {
            // 出栈
            var lastVar = stackStr.pop();
            if (varMaps[lastVar] !== item) {
                return false;
            }
        }
    }
    return stackStr.length > 0 ? false : true;
};
/**
 * https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/
 *  1249. 移除无效的括号
给你一个由 '('、')' 和小写字母组成的字符串 s。
你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
请返回任意一个合法字符串。
有效「括号字符串」应当符合以下 任意一条 要求：
空字符串或只包含小写字母的字符串
可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」
 
示例 1：
输入：s = "lee(t(c)o)de)"
输出："lee(t(c)o)de"
解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。

示例 2：
输入：s = "a)b(c)d"
输出："ab(c)d"
示例 3：

输入：s = "))(("
输出：""
解释：空字符串也是有效的

示例 4：
输入：s = "(a(b(c)d)"
输出："a(b(c)d)"
 */
var minRemoveToMakeValid = function (s) {
    var indexesToRemove = [];
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            stack.push(i);
        } if (s.charAt(i) == ')') {
            if (stack.length == 0) {
                indexesToRemove.push(i);
            } else {
                stack.pop();
            }
        }
    }

    while (stack.length) indexesToRemove.push(stack.pop());

    var res = '';
    for (let i = 0; i < s.length; i++) {
        if (!indexesToRemove.includes(i)) {
            res = res + s.charAt(i);
        }
    }
    return res;

}
/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * 125. 验证回文串
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true

示例 2:
输入: "race a car"
输出: false
 */
var isPalindrome = function (s) {
    var matchRes = s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g);
    if (matchRes === null) return true;
    var varStr = matchRes.join('');
    var left = 0;
    var right = varStr.length - 1;
    while (left < right) {
        if (varStr[left] == varStr[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
/**
 * https://leetcode-cn.com/problems/valid-palindrome-ii/
 * 680. 验证回文字符串 Ⅱ
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:
输入: "aba"
输出: True

示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
 */
var validPalindrome = function (s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isChildrom(s, left + 1, right) || isChildrom(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};


function isChildrom(str, left, right) {

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

/**
 * https://leetcode-cn.com/problems/reverse-string/
 * 344. 反转字符串
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

示例 2：
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
 */
var reverseString = function (s) {
    var n = s.length;
    for (let left = 0, right = n - 1; left < right; left++, --right) {
        var tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
    }
};
/** 
 * https://leetcode-cn.com/problems/remove-duplicate-letters/
 * 316. 去除重复字母
给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同

示例 1：
输入：s = "bcabc"
输出："abc"

示例 2：
输入：s = "cbacdcbc"
输出："acdb"
*/
var removeDuplicateLetters = function (s) {
    var len = s.length;
    // 每一个字符最后一次出现的下索引
    // 比如 bcabc,数组项目只有abc三项，所以各个字母最后出现的结果为a(0):2,b(1):3,c(2):4
    var lastIndex = [];
    for (let index = 0; index < len; index++) {
        var tempIndex = s.charCodeAt(index) - 'a'.charCodeAt();
        lastIndex[tempIndex] = index;
    }
    var stack = [];
    var visted = [];
    for (let index = 0; index < len; index++) {
        // 如果已经在栈中出现，则直接跳过
        if (visted[s.charCodeAt(index) - 'a'.charCodeAt()]) {
            continue;
        }

        while (stack.length > 0 &&
            stack[stack.length - 1].charCodeAt() > s.charCodeAt(index) &&//栈顶的元素大于当前添加的元素
            lastIndex[stack[stack.length - 1].charCodeAt() - 'a'.charCodeAt()] > index)  //以后还出现过
        {
            var item = stack.pop();
            visted[item.charCodeAt() - 'a'.charCodeAt()] = false;
        }
        stack.push(s[index]);
        visted[s.charCodeAt(index) - 'a'.charCodeAt()] = true;
    }
    var res = '';
    for (let index = 0; index < stack.length; index++) {
        res = res + stack[index];
    }
    return res;

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
/**
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * 剑指 Offer 48. 最长不含重复字符的子字符串
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例1
 * 输入: "abcabcbb"
 * 输出:3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 输入: "bbbbb"
 * 输出:1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 输入: "pwwkew"
 * 输出:3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 从前到后遍历字符串，维护一个string，记录着不重复字符子串。 每当遇到重复的字符时候，找到 
 * string中重复的字符，并截断。 循环往复直到遍历最后一个字符.
 * 
 * 复杂度分析
 * 时间复杂度:$O(n)$
 * 这样子需要从前向后遍历一遍长度为 $n$ 的字符串，需要进行 n 次字符是否重复的比较。 空间复杂度:$O(n)$
 * 在计算比较过程中，数组最长有可能存放 n 个不重复字符串。
 * 方法二
 * 从前到后遍历字符串，维护一个string，记录着不重复字符子串。 每当遇到重复的字符时候，找到 string中重复的字符，并截断。 
 * 循环往复直到遍历最后一个字符.
 * 思路
 * 记录当前正在遍历的不重复字串的子集 string ， 在遍历过程中不断地添加不重复字符，遇到重复字
 * 符则截断 string 达到 string 内补字符不重复的条件。
 */

 const lenngthOfLongestSubstring = function (s) {
    let num = 0;
    let max = 0;
    let subString = '';
    for (char of s) {
        if (subString.indexOf(char) === -1) {
            subString += char;
            num++;
            max = max < num ? num : max;
        } else {
            subString += char;
            subString = subString.slice(subString.indexOf(char) + 1);
            num = subString.length;
        }
    }
    return max
}
