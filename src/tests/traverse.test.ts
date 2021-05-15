import Traverse, {TraverseType} from "../methods/traverse"
import { TreeNode } from "../methods/binaryTree";

const traverse = new Traverse();
const data: TreeNode<number> = { "value": 1, "left": { "value": 2, "left": { "value": 4 } , "right": {"value": 5}}, "right": {"value": 3}};

test("DFS_INORDER", () => {
    expect(traverse.traverse(data, TraverseType.DFS_INORDER)).toEqual([4, 2, 5, 1, 3])
});

test("DFS_PREORDER", () => {
    expect(traverse.traverse(data, TraverseType.DFS_PREORDER)).toEqual([1, 2, 4, 5, 3])
});

test("DFS_POSTORDER", () => {
    expect(traverse.traverse(data, TraverseType.DFS_POSTORDER)).toEqual([4, 5, 2, 3, 1])
});

test("BFS", () => {
    expect(traverse.traverse(data, TraverseType.BFS)).toEqual([1, 2, 3, 4, 5])
});

