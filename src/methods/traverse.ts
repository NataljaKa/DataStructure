import BinaryTree from "./binaryTree"
import { TreeNode } from "./binaryTree";

export enum TraverseType {
    DFS_PREORDER,
    DFS_INORDER,
    DFS_POSTORDER,
    BFS
}

interface Traverse extends BinaryTree<number> {
    traverse(node: TreeNode<number>, traverseType: TraverseType): number[]
}

let traverseResult: number[];

class Traverse implements Traverse {

    public traverse(node: TreeNode<number>, traverseType: TraverseType): number[] {
        traverseResult = [];
        switch (traverseType) {
            case TraverseType.DFS_INORDER: {
                return this.inorder(node);
            }
            case TraverseType.DFS_PREORDER: {
                return this.preorder(node);
            }
            case TraverseType.DFS_POSTORDER: {
                return this.postorder(node);
            }
            case TraverseType.BFS: {
                let nodeArray: TreeNode<number>[] = [node];
                return this.bfs(nodeArray);
            }
        }
        return traverseResult;
    }

    private inorder(node: TreeNode<number>): number[] {
        if (node.left) {
            this.inorder(node.left);
        }
        traverseResult.push(node.value);
        if (node.right) {
            this.inorder(node.right);
        }
        return traverseResult
    }

    private preorder(node: TreeNode<number>): number[] {
        traverseResult.push(node.value);
        if (node.left) {
            this.preorder(node.left);
        }
        if (node.right) {
            this.preorder(node.right);
        }
        return traverseResult
    }

    private postorder(node: TreeNode<number>): number[] {
        if (node.left) {
            this.postorder(node.left);
        }
        if (node.right) {
            this.postorder(node.right);
        }
        traverseResult.push(node.value);
        return traverseResult
    }

    private bfs(nodeArray: TreeNode<number>[]): number[] {
        if (nodeArray.length > 0) {
            let currentLevel: TreeNode<number>[] = [];
            for (let i in nodeArray) {
                traverseResult.push(nodeArray[i].value);
                if (nodeArray[i].left) {
                    currentLevel.push(nodeArray[i].left!);
                }
                if (nodeArray[i].right) {
                    currentLevel.push(nodeArray[i].right!);
                }
            }
            this.bfs(currentLevel)
        }
        return traverseResult
    }
}

export default Traverse;