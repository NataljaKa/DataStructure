import GetColumn from "../methods/getColumn"
import { TreeNode } from "../methods/binaryTree";

const getColumn = new GetColumn();
const data: TreeNode<number> = { "value": 1, "left": { "value": 2, "left": { "value": 4 } , "right": {"value": 5, "right": {"value": 7}}}, "right": {"value": 3}};

test("0 column", () => {
    expect(getColumn.getColumn(data, 0)).toEqual([1, 5])
});

test("-1 column", () => {
    expect(getColumn.getColumn(data, -1)).toEqual([2])
});

test("1 column", () => {
    expect(getColumn.getColumn(data, 1)).toEqual([3, 7])
});
