import BinarySearchTree from "../methods/binarySearchTree"
import { TreeNode } from "../methods/binaryTree";

const searchTree = new BinarySearchTree();
const data1: TreeNode<number> = { value: 555 };
const data2: TreeNode<number> = { "value": 1, "right": { "value": 8, "left": { "value": 3 } } };

test("one node", () => {
  expect(searchTree.has(data1, 555)).toEqual(true)
});

test("data is present", () => {
  expect(searchTree.has(data2, 3)).toEqual(true)
});

test("data is absent", () => {
  expect(searchTree.has(data2, 4)).toEqual(false)
});

