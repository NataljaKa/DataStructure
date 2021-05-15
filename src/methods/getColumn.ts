import BinaryTree from "./binaryTree"
import { TreeNode } from "./binaryTree";

interface GetColumn extends BinaryTree<number> {
    getColumn(node: TreeNode<number>, column: number): number[]
}

let currentColumn: number;
let getColumnResult: number[];

class GetColumn implements GetColumn {

    public getColumn(node: TreeNode<number>, column: number): number[] {
        currentColumn = 0;
        getColumnResult = [];
        return this.checkNode(node, column).sort();
    }


    private checkNode(node: TreeNode<number>, column: number): number[] {
        if (currentColumn === column) getColumnResult.push(node.value);
        if (node.left) {
            currentColumn--;
            this.checkNode(node.left, column);
            currentColumn++;
        }
        if (node.right) {
            currentColumn++;
            this.checkNode(node.right, column);
            currentColumn--;
        }
        return getColumnResult
    }
}


export default GetColumn