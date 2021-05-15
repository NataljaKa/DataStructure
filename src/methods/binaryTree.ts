export interface TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
}

interface BinaryTree<T> {
  addValue(value: T): TreeNode<T>
}

class BinaryTree<T> implements BinaryTree<T>{

  private root: TreeNode<T> | undefined;

  public addValue(value: T): TreeNode<T> {
    const currentNode = this.createNewNode(value);
    if (this.root === undefined)
      this.root = currentNode;
    else {
      this.insertNode(this.root, currentNode);
    }
    return this.root
  }

  private createNewNode = (value: T): TreeNode<T> => {
    return {
      value
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (node.left === undefined) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    if (newNode.value > node.value) {
      if (node.right === undefined) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }
};

export default BinaryTree;