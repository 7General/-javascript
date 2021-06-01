window.onload = function () {
    // 2. 两数相加
    // 19. 删除链表的倒数第 N 个结点
    // 1. 合并两个有序链表
    // 24. 两两交换链表中的节点
    // 83. 删除排序链表中的重复元素(神奇的头指针)有序的 ！= 面试题 02.01. 移除重复节点(无序的)
    // 25. K 个一组翻转链表
    // 86. 分隔链表
    // 141. 环形链表
    // 160. 相交链表
    // 203. 移除链表元素(神奇的虚拟头结点)===剑指 Offer 18. 删除链表的节点
    // 206. 反转链表
    // 234. 回文链表
    // 237. 删除链表中的节点 == 面试题 02.03. 删除中间节点
    // 328. 奇偶链表
    // 876. 链表的中间结点
    // 剑指 Offer 06. 从尾到头打印链表
    // 剑指 Offer 22. 链表中倒数第k个节点   != 面试题 02.02. 返回倒数第 k 个节点
    // 两个链表的第一个公共节点 = 160. 相交链表
    // 面试题 02.01. 移除重复节点(无序的)

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
var addTwoNumbers = function (l1, l2) {
    let pre = new ListNode(0);
    let cur = pre;
    var carry = 0;
    while (l1 != null || l2 != null) {
        var x = l1 == null ? 0 : l1.val;
        var y = l2 == null ? 0 : l2.val;
        var sum = x + y + carry;
        // 注意小数点保留
        carry = Math.floor(sum / 10);
        sum = Math.floor(sum % 10);

        cur.next = new ListNode(sum);
        cur = cur.next;
        if (l1 != null)
            l1 = l1.next;
        if (l2 != null)
            l2 = l2.next;
    }
    if (carry == 1) {
        cur.next = new ListNode(carry);
    }
    return pre.next;
};
/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
进阶：你能尝试使用一趟扫描实现吗？

示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例 2：
输入：head = [1], n = 1
输出：[]

示例 3：
输入：head = [1,2], n = 1
输出：[1]
 */
var removeNthFromEnd = function (head, n) {
    let first = head;
    let second = head;
    while (n > 0) {
        first = first.next;
        n--;
    }
    if (!first) return head.next;
    // 指向内容【1 3】，【2 4】，【3，5】，之后就不能在继续向后了，如果有就是【4，null】;
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return head;
};
/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 1. 合并两个有序链表
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
 */
var mergeTwoLists2 = function (l1, l2) {
    var newNode = null;
    if (l1 == null && l2 == null) return null;
    if (l1 == null || l2 == null) return l1 == null ? l2 : l1;
    if (l1.val <= l2.val) {
        newNode = l1;
        newNode.next = mergeTwoLists(l1.next, l2);
    } else {
        newNode = l2;
        newNode.next = mergeTwoLists(l1, l2.next)
    }
    return newNode;
};

var mergeTwoLists = function (l1, l2) {
    let pre = new ListNode(-1);
    let curr = pre;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 == null ? l2 : l1;
    return pre.next;
}
/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 24. 两两交换链表中的节点
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 */
var swapPairs = function (head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let current = dummy;
    while (current.next && current.next.next) {
        let n1 = current.next;
        let n2 = current.next.next;
        n1.next = n2.next;
        n2.next = current.next;
        current.next = n2;
        current = n1;

        //  current.next = n2;
        //  n1.next = n2.next;
        //  n2.next = n1;
        //  current = n1;
    }
    return dummy.next;
}
var swapPairs1 = function (head) {
    let dummy = new ListNode(-1);
    let cur = pre = dummy
    dummy.next = head;

    let num = 0;
    let k = 2;

    while (cur) {
        ++num;
        cur = cur.next;
    }
    // https://www.bilibili.com/video/BV18Z4y1T7Kk?from=search&seid=17443738095353357483
    //先新建一个虚拟结点newHead，newHead->next=head，这样的话就算head被交换，最终返回的是newHead->next，也是正确的结果链表头结点。
    // 1 2 3
    // 交换的方法一定要注重逻辑，如图：1和2交换，先令1->next=3，然后再让2->next=1，并且让上一节点f->next=2.这之后呢，变化p和f指针的位置，继续下一次的两两交换。
    while (num > k) {

        cur = pre.next; // n1
        for (let index = 1; index < k; index++) {
            let t = cur.next; // n2
            cur.next = t.next;// n1.next = n2.next
            t.next = pre.next; // n2.next = p.next
            pre.next = t; // p.next = n2

            // let n1 = cur.next;
            // let n2 = cur.next.next;
            // pre.next = n2;
            // n1.next = n2.next;
            // n2.next = n1;
        }
        pre = cur;

        num -= k;
    }
    return dummy.next;
};
/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * 83. 删除排序链表中的重复元素
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
返回同样按升序排列的结果链表。

示例 1：
输入：head = [1,1,2]
输出：[1,2]

示例 2：
输入：head = [1,1,2,3,3]
输出：[1,2,3]
 */
var deleteDuplicates = function (head) {
    if (!head) return head;
    let cur = head;
    while (cur.next) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
/**
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * 25. K 个一组翻转链表
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
进阶：
你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 
示例 1：
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

示例 2：
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]

示例 3：
输入：head = [1,2,3,4,5], k = 1
输出：[1,2,3,4,5]

示例 4：
输入：head = [1], k = 1
输出：[1]
 */
var reverseKGroup = function (head, k) {
    let dummy = new ListNode(-1);
    let pre = dummy
    let cur = pre;

    let num = 0;

    dummy.next = head;
    while (cur) {
        ++num;
        cur = cur.next;
    }
    while (num > k) {
        cur = pre.next;
        for (let index = 1; index < k; index++) {
            let t = cur.next;
            cur.next = t.next;
            t.next = pre.next;
            pre.next = t;
        }
        pre = cur;
        num -= k;
    }
    return dummy.next;
}
/**
 * https://leetcode-cn.com/problems/partition-list/
 * 86. 分隔链表

给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
你应当 保留 两个分区中每个节点的初始相对位置。
 
示例 1：
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]

示例 2：
输入：head = [2,1], x = 2
输出：[1,2]
*/
var partition = function (head, x) {
    let small = new ListNode(0);
    const smallHead = small;

    let large = new ListNode(0);
    const largeHead = large;

    while (head !== null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null;
    small.next = largeHead.next;
    return smallHead.next;

};
/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 141. 环形链表
 * 
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 */
var deleteDuplicates = function (head) {
    if (!head) return head;
    let cur = head;
    while (cur.next) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * 160. 相交链表 
编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：
在节点 c1 开始相交。

示例 1：
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 
示例 2：
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
 
示例 3：
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
 */
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) return null;
    let pA = headA, pB = headB;
    while (pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pB;
};
/**
 * ps
 * 
 * 注意：当A链表没有数据的时候，用原始数据headB 
*/ 


/**
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 * 剑指 Offer 52. 两个链表的第一个公共节点 
 */
var getIntersectionNode = function (headA, headB) {
    let A = headA, B = headB;
    while (A != B) {
        A = A != null ? A.next : headB;
        B = B != null ? B.next : headA;
    }
    return A;
};
/**
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * 203. 移除链表元素(神奇的虚拟头结点)
 * 
 * ===================================
 * 剑指 Offer 18. 删除链表的节点
 * 
 * 
 * 
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
示例 1：
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]

示例 2：
输入：head = [], val = 1
输出：[]

示例 3：
输入：head = [7,7,7,7], val = 7
输出：[]
 */
var removeElements = function (head, val) {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let cur = dummyHead;
    while (cur.next != null) {
        if (cur.next.val == val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummyHead.next;

};
/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 206. 反转链表
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 
示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：
输入：head = [1,2]
输出：[2,1]

示例 3：
输入：head = []
输出：[]
 */
var reverseList2 = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let newHeader = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHeader;
};
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    var tempHeader = null;
    var newHeader = null;
    while (head) {
        tempHeader = head.next;
        head.next = newHeader;
        newHeader = head;
        head = tempHeader;
    }
    return newHeader;
};
/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 234. 回文链表
请判断一个链表是否为回文链表。

示例 1:
输入: 1->2
输出: false

示例 2:
输入: 1->2->2->1
输出: true
 */
var isPalindrome = function (head) {
    if (!head) return false;
    let leftStr = '';
    let rightStr = '';
    while (head) {
        leftStr = leftStr + head.val;
        rightStr = head.val + rightStr;
        head = head.next;
    }
    return leftStr === rightStr;
};
/**
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 * 237. 删除链表中的节点
 * 
 * ====================
 * 
 * 面试题 02.03. 删除中间节点
 * 
 * 
 * 
请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
现有一个链表 -- head = [4,5,1,9]，它可以表示为:

示例 1：
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

示例 2：
输入：head = [4,5,1,9], node = 1
输出：[4,5,9]
解释：给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

/**
 * https://leetcode-cn.com/problems/delete-middle-node-lcci/
 * 面试题 02.03. 删除中间节点
 * 
若链表中的某个节点，既不是链表头节点，也不是链表尾节点，则称其为该链表的「中间节点」。
假定已知链表的某一个中间节点，请实现一种算法，将该节点从链表中删除。
例如，传入节点 c（位于单向链表 a->b->c->d->e->f 中），将其删除后，剩余链表为 a->b->d->e->f

示例：
输入：节点 5 （位于单向链表 4->5->1->9 中）
输出：不返回任何数据，从链表中删除传入的节点 5，使链表变为 4->1->9
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


/**
 * https://leetcode-cn.com/problems/odd-even-linked-list/
 * 328. 奇偶链表
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL

示例 2:
输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL
 */
var oddEvenList = function (head) {
    if (head === null || head.next === null || head.next.next === null) { return head; }
    let odd = head;
    let even = head.next;
    const evenHeadPoint = head.next;
    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHeadPoint;
    return head;
};
/**
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * 876. 链表的中间结点
给定一个头结点为 head 的非空单链表，返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。

示例 1：
输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

示例 2：
输入：[1,2,3,4,5,6]
输出：此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
 */
var middleNode = function (head) {
    var count = 0;
    var curent = head;
    while (curent != null) {
        ++count;
        curent = curent.next;
    }

    curent = head;
    var index = 0;
    var minde = Math.floor(count / 2);
    console.log(minde);
    while (index < minde) {
        ++index;
        curent = curent.next;
    }
    return curent;
};
/**
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 剑指 Offer 06. 从尾到头打印链表
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：
输入：head = [1,3,2]
输出：[2,3,1]
 */
var reversePrint = function (head) {
    var stack = [];
    var res = [];
    while (head != null) {
        stack.push(head.val);
        head = head.next;
    }
    // while(stack.length != 0){
    //     var item = stack.pop();
    //     res.push(item);
    // }
    return stack.reverse();
};
/**
17   54
99   89
 */
/**
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * 剑指 Offer 18. 删除链表的节点
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点。
注意：此题对比原题有改动

示例 1:
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

示例 2:
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 */
var deleteNode = function (head, val) {
    let preHeader = new ListNode(0);
    preHeader.next = head;
    let cur = preHeader;
    while (cur.next != null) {
        if (cur.next.val == val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return preHeader.next;
};
/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 剑指 Offer 22. 链表中倒数第k个节点
 * 
 * 
 * ================================
 * 面试题 02.02. 返回倒数第 k 个节点
 * 
 * 
 * 
 * 
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 
示例：
给定一个链表: 1->2->3->4->5, 和 k = 2.
返回链表 4->5.
 */
var getKthFromEnd = function (head, k) {
    let first = head;
    let second = head;
    while (k > 0) {
        first = first.next;
        k--;
    }

    while (first) {
        first = first.next;
        second = second.next;
    }
    return second;

};
/**
 * https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
 * 面试题 02.01. 移除重复节点(无序的)
编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

示例1:
 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]

示例2:
 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]
 */
var removeDuplicateNodes = function (head) {
    var maps = {};
    let preHead = new ListNode(0);
    preHead.next = head;
    let curr = preHead;
    while (curr.next != null) {
        var item = curr.next.val;
        if (maps[item]) {
            curr.next = curr.next.next;
        } else {
            maps[item] = 1;
            curr = curr.next;
        }
    }
    return preHead.next;
};
/**
 * https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
 * 面试题 02.02. 返回倒数第 k 个节点
 * 
 * ===============================
 * 
 * 
 * 
 * 
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
注意：本题相对原题稍作改动

示例：
输入： 1->2->3->4->5 和 k = 2
输出： 4
 */
var kthToLast = function (head, k) {
    let slow = cur = head;
    while (k > 0) {
        cur = cur.next
        k--;
    }
    while (cur) {
        cur = cur.next;
        slow = slow.next;
    }
    return slow.val;
}