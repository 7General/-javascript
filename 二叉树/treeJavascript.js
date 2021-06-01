window.onload = function () {

    // 144. 二叉树的前序遍历
    // 94. 二叉树的中序遍历
    // 145. 二叉树的后序遍历
    // 102. 二叉树的层序遍历
    // 剑指 Offer 55 - I. 二叉树的深度
    // 226. 翻转二叉树

};
/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 * 中左右
 */
var preorderTraversal2 = function (root) {
    var res = [];
    const preinos = (root) => {
        if (root === null) return [];
        res.push(root.val);
        preinos(root.left);
        preinos(root.right);
    };
    preinos(root);
    return res;
};

var preorderTraversal = function (root) {
    if (root === null) return [];
    var stack = [];
    var res = [];
    stack.push(root);
    while (stack.length != 0) {
        var node = stack.pop();
        res.push(node.val);
        if (node.right != null) {
            stack.push(node.right);
        }
        if (node.left != null) {
            stack.push(node.left);
        }
    }
    return res;
};
/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 94. 二叉树的中序遍历
 * 
 * 左中右
 */
var inorderTraversal2 = function (root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

var inorderTraversal = function (root) {
    if (root === null) return [];
    let node = root;
    var stack = [];
    const res = [];
    while (true) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else if (stack.length == 0) {
            return res;
        } else {
            node = stack.pop();
            res.push(node.val);
            node = node.right
        }
    }
};
/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 145. 二叉树的后序遍历
 * 
 * 左右中
 * 
 * 
 * 
 * 
 * ps
 * 把前序遍历 中，左，右，先变化一下位置 中，右，左。然后进行翻转 左 右 中
 * 
 */
var postorderTraversal = function (root) {
    var res = [];
    const postOrder = (root) => {
        if (root === null) return [];
        postOrder(root.left);
        postOrder(root.right);
        res.push(root.val);
    };
    postOrder(root);
    return res;
};

var postorderTraversal = function (root) {
    if (root === null) return [];
    var stack = [];
    var res = [];
    stack.push(root);
    while (stack.length != 0) {
        var node = stack.pop();
        res.push(node.val);

        if (node.left != null) {
            stack.push(node.left);
        }
        if (node.right != null) {
            stack.push(node.right);
        }
    }
    return res.reverse();
};
/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 102. 二叉树的层序遍历
 */
var levelOrder = function (root) {
    // if(root === null) return[];
    // var stack = [];
    // var res = [];
    // stack.push(root);
    // while(stack.length != 0){
    //     var node = stack.shift();
    //     res.push(node.val);
    //     if(node.right != null) {
    //         stack.push(node.right);
    //     }
    //     if(node.left != null) {
    //         stack.push(node.left);
    //     }
    // }
    // return res;

    var resoult = [];
    if (!root) return resoult;

    var levelArry = [];
    levelArry.push(root);

    while (levelArry.length != 0) {
        const levelArrySize = levelArry.length;
        var temp = [];
        for (let index = 0; index < levelArrySize; index++) {
            var node = levelArry.shift();
            temp.push(node.val);
            if (node.left) levelArry.push(node.left);
            if (node.right) levelArry.push(node.right);
        }
        resoult.push(temp);
    }
    return resoult;
};
/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 * 剑指 Offer 55 - I. 二叉树的深度
 */
var maxDepth = function (root) {
    var levelCount = 0;
    if (!root) return levelCount;
    var levelArray = [];
    levelArray.push(root);
    while (levelArray.length != 0) {
        var count = levelArray.length;
        for (let index = 0; index < count; index++) {
            var node = levelArray.shift();
            if (node.left) levelArray.push(node.left);
            if (node.right) levelArray.push(node.right);
        }
        levelCount++;
    }
    return levelCount;
};
/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 226. 翻转二叉树
 */
var invertTree = function (root) {
    if (root == null) return null;
    var temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
};