import BinaryTree from "./binaryTree"
import { TreeNode } from "./binaryTree";

interface BinarySearchTree extends BinaryTree<number> {
    has(node: TreeNode<number>, data: number): boolean
}

class BinarySearchTree implements BinarySearchTree {

    public has(node: TreeNode<number>, data: number): boolean {
        if (node.value === data) {
            return true
        }
        else if (node.value > data && node.left) {
            return this.has(node.left, data);
        }
        else if (node.value < data && node.right) {
            return this.has(node.right, data);
        }
        else {
            return false
        }
    }

    
}

export default BinarySearchTree;