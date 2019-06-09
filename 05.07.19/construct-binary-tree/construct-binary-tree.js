/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let pIndex;
var buildTree = function (preorder, inorder) {
    if (!preorder)
        return null;
    pIndex = 0;
    let res = build(preorder, inorder, 0, inorder.length - 1);
    return res;
};

let build = function (preorder, inorder, istart, iend) {
    if (istart > iend)
        return null;

    let val = preorder[pIndex];
    let node = new TreeNode(val);
    pIndex++;

    if (istart === iend)
        return node;

    let index = searchInOrder(val, inorder, istart, iend);
    node.left = build(preorder, inorder, istart, index - 1);
    node.right = build(preorder, inorder, index + 1, iend);

    return node;
};

let searchInOrder = function (val, inOrder, start, end) {
    let i = start;
    while (i <= end) {
        if (inOrder[i] === val)
            break;
        i++;
    }
    return i;
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);