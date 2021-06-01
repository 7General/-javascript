window.onload = function () {

    /**
     * splice(会改变数组元素)start:(开始位置索引(包含自己)) end（要删除的项目数量）
     * slice（不会）start:(开始位置索引) end（结束位置索引= end -1）
     */
    // 在很多的数据有不相同数据中，找到重复项目，利用hash表统计
    /**
     * 1,2,3,4,4,6,4,7,2=>这样数据 
     */

    // test([1,2,3,4,4]);
    // findDuplicate([5,6,7,8,8]);


    //https://leetcode-cn.com/problems/contains-duplicate/solution/chao-xiang-xi-kuai-lai-miao-dong-ru-he-p-sf6e/
    // 面试题 01.01. 判定字符是否唯一
    // 面试题 10.01. 合并排序的数组
    // 26. 删除有序数组中的重复项
    // 27. 移除元素
    // 17. 存在重复元素
    // 剑指 Offer 03. 数组中重复的数字
    // 136. 只出现一次的数字(位于运算)
    // 面试题 17.04. 消失的数字
    // 915. 分割数组
    // 283. 移动零
    // 219. 存在重复元素 II
    // 674. 最长连续递增序列
    // 414. 第三大的数
    // 80. 删除有序数组中的重复项 II
    // 16. 最接近的三数之和
    // 15. 三数之和
    // 718. 最长重复子数组(滑动窗口)
    // removeDuplicatesO([0,0,1,1,1,1,2,3,3]);
    // 14. 最长公共前缀
    // 66. 加一
};

function test(nums) {
    var temp;
    for (let i = 0; i < nums.length; i++) {
        console.log('222');
        while (nums[i] != i) {
            if (nums[i] == nums[nums[i]]) {
                return nums[i];
            }
            temp = nums[i];
            nums[i] = nums[temp];
            nums[temp] = temp;
            console.log(nums);
        }
    }

}

/**
 * https://leetcode-cn.com/problems/is-unique-lcci/
 * 面试题 01.01. 判定字符是否唯一
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
ß
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
var isUniqueOther = function (astr) {
    var maps = {};
    for (let index = 0; index < astr.length; index++) {
        var item = astr[index];
        if (maps[item]) {
            maps[item] = maps[item] + 1;
        } else {
            maps[item] = 1;
        }
    }
    for (let index = 0; index < astr.length; index++) {
        var item = astr[index];
        if (maps[item] > 1) {
            return false;
        }
    }
    return true;
};

/**
 * https://leetcode-cn.com/problems/sorted-merge-lcci/
 * 面试题 10.01. 合并排序的数组

给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
初始化 A 和 B 的元素数量分别为 m 和 n。
示例:
输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
 */
var merge = function (A, m, B, n) {
    var firstIndex = 0;
    var secIndex = 0;

    var resArray = [];
    var resIndex = 0;
    while (firstIndex < m && secIndex < n) {
        if (A[firstIndex] < B[secIndex]) {
            resArray[resIndex++] = A[firstIndex++];
        } else {
            resArray[resIndex++] = B[secIndex++];
        }
    }

    while (firstIndex < m) {
        resArray[resIndex++] = A[firstIndex++];
    }
    while (secIndex < n) {
        resArray[resIndex++] = B[secIndex++];
    }

    for (let index = 0; index < resArray.length; index++) {
        A[index] = resArray[index];
    }

    return A;
};
/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 26. 删除有序数组中的重复项
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

说明:
为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
你可以想象内部操作如下:
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 
示例 1：
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

示例 2：
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 */
var removeDuplicates = function (nums) {
    var startIndex = 0;
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] != nums[startIndex]) {
            ++startIndex;
            nums[startIndex] = nums[index];
        }
    }
    return startIndex + 1;
};
/**
 * https://leetcode-cn.com/problems/remove-element/
 * 27. 移除元素
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

说明:
为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
你可以想象内部操作如下:
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

示例 1：
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

示例 2：
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 */
var removeElement = function (nums, val) {
    var startIndex = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != val) {
            nums[startIndex] = nums[index];
            startIndex++;
        }
    }
    return startIndex;
};
/**
 * https://leetcode-cn.com/problems/contains-duplicate/
 * 17. 存在重复元素（hash表）
给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
 */
var containsDuplicate2 = function (nums) {
    for (let index = 0; index < nums.length; index++) {
        var left = index;
        var right = nums.length - 1;
        while (left < right) {
            if (nums[left] == nums[right]) {
                return true;
                break;
            } else {
                right--;
            }
        }
    }
    return false;
};
/**
 * 1060 12.24
 * 40 91.20
 */
var containsDuplicate3 = function (nums) {
    var maps = {};
    for (let index = 0; index < nums.length; index++) {
        var item = nums[index];
        if (maps[item]) {
            return true;
        } else {
            maps[item] = 1;
        }
    }
    return false;
};
/**
 * 112 29.27
 * 46 7.87
 */
/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 剑指 Offer 03. 数组中重复的数字（hash表）
找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，
但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
 */
var findRepeatNumber = function (nums) {
    var maps = {};
    for (let index = 0; index < nums.length; index++) {
        var item = nums[index];
        if (maps[item]) {
            return item;
        } else {
            maps[item] = 1;
        }
    }
    return -1;
};

/**
 * https://leetcode-cn.com/problems/find-the-duplicate-number/
 * 287. 寻找重复数（下标统计）
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

示例 1：
输入：nums = [1,3,4,2,2]
输出：2.

示例 2：
输入：nums = [3,1,3,4,2]
输出：3

示例 3：
输入：nums = [1,1]
输出：1

示例 4：
输入：nums = [1,1,2]
输出：1

 * ****************************************************
 * 按照数组下标进行统计，统计元素 <= 的元素出现的个数
 *
 *  &***** 数组元素只能出现的数字为1，2，3，4其他元素不能出现
 *
 * 
 * 
 * ****************************************************
 */
var findDuplicate = function (nums) {
    var len = nums.length;
    var left = 0;
    var right = nums.length - 1;
    var ans = -1;
    while (left <= right) {
        var mind = parseInt((left + right) / 2);
        var startCount = 0;
        for (let index = 0; index < len; index++) {
            if (nums[index] <= mind) {
                startCount++;
            }
        }
        if (startCount <= mind) {
            left = mind + 1;
        } else {
            right = mind - 1;
            ans = mind;
        }
    }
    console.log(ans);
    return ans;
};
/**
 * https://leetcode-cn.com/problems/single-number/
 * 136. 只出现一次的数字（其余元素只出现两次=> 位于运算）
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均**出现两次**。找出那个只出现了一次的元素。
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
    var single = 0;
    for (let index = 0; index < nums.length; index++) {
        single = single ^ nums[index];
    }
    return single;
};
/**
 * https://leetcode-cn.com/problems/single-number-ii/
 * 137. 只出现一次的数字 II其余元素只出现***三次***=> hash表）
 * 
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰**出现三次** 。请你找出并返回那个只出现了一次的元素。
示例 1：
输入：nums = [2,2,3,2]
输出：3

示例 2：
输入：nums = [0,1,0,1,0,1,99]
输出：99
 */
var singleNumber2 = function (nums) {
    var maps = {};
    for (let index = 0; index < nums.length; index++) {
        var item = nums[index];
        if (maps[item]) {
            maps[item] = maps[item] + 1;
        } else {
            maps[item] = 1;
        }
    }
    for (let index = 0; index < nums.length; index++) {
        var item = nums[index];
        if (maps[item] == 1) {
            return item;
        }
    }
    return -1;
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
var missingNumber = function (nums) {
    var len = nums.length;
    var res = 0;
    for (let index = 0; index < len; index++) {
        res = res ^ (index + 1);
        res = res ^ nums[index];
    }
    return res;
};

/**
 * https://leetcode-cn.com/problems/partition-array-into-disjoint-intervals/
 * 915. 分割数组 
给定一个数组 A，将其划分为两个连续子数组 left 和 right， 使得：
left 中的每个元素都小于或等于 right 中的每个元素。
left 和 right 都是非空的。
left 的长度要尽可能小。
在完成这样的分组后返回 left 的长度。可以保证存在这样的划分方法。

 
示例 1：
输入：[5,0,3,8,6]
输出：3
解释：left = [5,0,3]，right = [8,6]

示例 2：
输入：[1,1,1,0,6,12]
输出：4
解释：left = [1,1,1,0]，right = [6,12]
 */
var partitionDisjoint = function (nums) {
    var len = nums.length;
    var max = nums[0];
    var leftMax = nums[0];
    var pos = 0;
    for (let index = 0; index < len; index++) {
        // 取左边最大数
        max = Math.max(max, nums[index]);
        if (nums[index] >= leftMax) {
            continue;
        }
        leftMax = max;
        pos = index;
    }
    return pos + 1;
};

/**
 * https://leetcode-cn.com/problems/move-zeroes/
 * 283. 移动零
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数
 */
var moveZeroes = function (nums) {
    var startIndex = 0;
    for (let index = 0; index < nums.length; index++) {
        var item = nums[index];
        if (item != 0) {
            var temp = nums[startIndex];
            nums[startIndex] = item;
            nums[index] = temp;
            startIndex++;
        }
    }
};
/**
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * 219. 存在重复元素 II
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

示例 1:
输入: nums = [1,2,3,1], k = 3
输出: true

示例 2:
输入: nums = [1,0,1,1], k = 1
输出: true

示例 3:
输入: nums = [1,2,3,1,2,3], k = 2
输出: false


*********************解题方案*********************
* 思路
* 标签：哈希
* 维护一个哈希表，里面始终最多包含 k 个元素，当出现重复值时则说明在 k 距离内存在重复元素
* 每次遍历一个元素则将其加入哈希表中，如果哈希表的大小大于 k，则移除最前面的数字
* 时间复杂度：O(n)，n 为数组长度
 */
var containsNearbyDuplicate = function (nums, k) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
};
/**
 * https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 * 674. 最长连续递增序列
给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

示例 1：
输入：nums = [1,3,5,4,7]

输出：3
解释：最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 

示例 2：
输入：nums = [2,2,2,2,2]
输出：1
解释：最长连续递增序列是 [2], 长度为1。
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length <= 1) return nums.length;

    let ans = 1;
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            count++;
        } else {
            count = 1;
        }

        ans = count > ans ? count : ans;
        console.log('ans:' + ans + ';i:' + i);
    }
    return ans;
};
/**
 * https://leetcode-cn.com/problems/third-maximum-number/
 * 414. 第三大的数
给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

示例 1：
输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。

示例 2：
输入：[1, 2]
输出：2
解释：第三大的数不存在, 所以返回最大的数 2 。

示例 3：
输入：[2, 2, 3, 1]
输出：1
解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 */
var thirdMax = function (nums) {
    var first = second = third = -Infinity;
    for (let index = 0; index < nums.length; index++) {
        var item = nums[index];
        if (item > first) {
            third = second;
            second = first;
            first = item;
        } else if (item > second && item < first) {
            third = second;
            second = item;
        } else if (item > third && item < second) {
            third = item;
        }
    }
    return third != -Infinity ? third : first;
};
/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 * 80. 删除有序数组中的重复项 II
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

说明：
为什么返回数值是整数，但输出的答案是数组呢？
请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
你可以想象内部操作如下:
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

示例 1：
输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]
解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。 不需要考虑数组中超出新长度后面的元素。

示例 2：
输入：nums = [0,0,1,1,1,1,2,3,3]
输出：7, nums = [0,0,1,1,2,3,3]
解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。 不需要考虑数组中超出新长度后面的元素。
 */
var removeDuplicateso = function (nums) {
    var startIndex = 0;
    var count = 1;
    for (let index = 1; index < nums.length; index++) {
        if (nums[startIndex] != nums[index]) {
            nums[++startIndex] = nums[index];
            count = 1;
        } else {
            count++;
            if (count <= 2) {
                nums[++startIndex] = nums[index];
            }
        }
    }
    return startIndex + 1;
};

var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }
    let slow = 2, fast = 2;
    while (fast < n) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};

/***
 * https://leetcode-cn.com/problems/3sum-closest/
 * 16. 最接近的三数之和
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
示例：
输入：nums = [-1,2,1,-4], target = 1

输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */
var threeSumClosest = function (nums, target) {
    nums.sort();
    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1, end = nums.length - 1;
        while (start < end) {
            let sum = nums[start] + nums[end] + nums[i];
            if (Math.abs(target - sum) < Math.abs(target - ans))
                ans = sum;
            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return ans;
            }
        }
    }
    return ans;
};


/**
 * https://leetcode-cn.com/problems/3sum/
 * 15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

示例 2：
输入：nums = []
输出：[]

示例 3：
输入：nums = [0]
输出：[]
 */
var threeSum = function (nums) {
    let ans = [];
    const len = nums.length;
    if (nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum == 0) {
                ans.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] == nums[L + 1]) L++; // 去重
                while (L < R && nums[R] == nums[R - 1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return ans;
};
/**
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 * (******与下一题就对比***********)
 * 
 * 718. 最长重复子数组
 * 
 * (******与下一题就对比***********)
 * 
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
示例：

输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。
 */
var findLength = function (nums1, nums2) {
    let n = nums1.length, m = nums2.length;
    let ret = 0;
    //让A不动,B先滑,B的下标一直从0开始,A的下标不断更新成i
    for (let i = 0; i < n; i++) {
        let len = Math.min(m, n - i);
        let maxlen = maxLength(nums1, nums2, i, 0, len);
        ret = Math.max(ret, maxlen);
    }
    //让B不动,A先滑,A的下标一直从0开始,B的下标不断更新成i  
    for (let i = 0; i < m; i++) {
        let len = Math.min(n, m - i);
        let maxlen = maxLength(nums1, nums2, 0, i, len);
        ret = Math.max(ret, maxlen);
    }
    return ret;

};

function maxLength(A, B, indexA, indexB, Len) {
    let ret = 0, k = 0;
    for (let i = 0; i < Len; i++) {
        if (A[indexA + i] == B[indexB + i]) {
            k++;
        } else {
            k = 0;
        }
        ret = Math.max(ret, k);
    }
    return ret;
}
/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * ******与上一题就对比***********
 * 
 * 14. 最长公共前缀
 * 
 * (******与上一题就对比***********)
 * 
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = strs[0];
    for(let index = 1;index < strs.length;index++) {
        commonPrefix = findCommonPreFix(commonPrefix,strs[index]);
        
    }
    return commonPrefix;
};

function findCommonPreFix(a,b) {
    let i = 0;
    while(i < a.length && i < b.length && a[i] == b[i]){
        i++
    }
    return a.substring(0,i);
}


/**
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 * 989. 数组形式的整数
 * 加对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
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