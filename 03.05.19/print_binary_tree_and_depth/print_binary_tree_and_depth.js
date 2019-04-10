/**
 * Given a binary tree, and a number k. Print all nodes that are at 
 * distance k from the root (root is considered at distance 0 from itself).
 * Nodes should be printed from left to right. If k is more than height of 
 * tree, nothing should be printed
 * 
 * For example, if below is the given tree and k is 2, output should be 4, 5, 6
 * 
 *      1
 *     /  \
 *    2    3
 *   /    / \
 *  4    5  6 
 *        \
 *         8
 * 
 * Source: https://www.geeksforgeeks.org/print-nodes-distance-k-given-node-binary-tree/
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
 * @param {*} node 
 * @param {*} depth 
 */
const findDepth = (node,k,level) => {
    if(node == null){
        return
    }

    if(k == level){
        console.log(node.data)
        return;
    }

    // recursively search left and right until hit depth
    findDepth(node.left, k, level+1)
    findDepth(node.right, k, level+1)
}




// construct a tree
const root = new Node(1)
root.left =new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.right.left = new Node(5)
root.right.right = new Node(6);
root.right.left.right = new Node(8);

console.log('Search level 2: ')
findDepth(root, 2, 0)


console.log('Search level 3: ')
findDepth(root, 3, 0)