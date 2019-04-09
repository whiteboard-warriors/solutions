/**
 * Given a Binary Tree and a key, write a function that returns level of the key.
 * For example, consider the following tree. 
 * If the input key is 10, then your function should return 2. 
 * If the input key is 12, then your function should return 4.
 *  And for key which is not present in key, then your function should return -1.
 * 
 *              20 
 *            /   \ 
 *         10     30 
 *        / \    / \ 
 *       5  15  25  40 
 *           / 
 *          12 
 * Source: https://www.geeksforgeeks.org/get-level-of-a-node-in-a-binary-tree/
 */

/**
 * A data structure for a treenode
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 *  
 */
const getLevelUtil = (node, data, level) => {
    if (node == null) {
        return -1;
    }

    if (node.data == data) {
        return level;
    }

    // recursively travers the left node of the tree
    var downLevel = getLevelUtil(node.left, data, level + 1)

    // if we have hit another level down on the left we travers further
    if (downLevel != -1)
        return downLevel;

    downLevel = getLevelUtil(node.right, data, level + 1)

    return downLevel;
}

const getLevel = (node, data) => {
    // depth will be affected by the initial argument here if we are counting the root as 0 or 1
    // if we want to return 0 for not found items, we should assume it would be the same if 
    // we start counting levels at zero
    return getLevelUtil(node, data, 1);
}

// construct a tree
const root = new Node(20)
root.left =new Node(10)
root.right = new Node(30)
root.left.left = new Node(5)
root.left.right = new Node(15)
root.right.left = new Node(25);
root.right.right = new Node(40);
root.left.right.left = new Node(12);

console.log('Level of 12 is: '+getLevel(root,20))
console.log('Level of 12 is: '+getLevel(root,12))
console.log('Level of 10 is: '+getLevel(root,10))
console.log('Level of 55 is: '+getLevel(root,55));