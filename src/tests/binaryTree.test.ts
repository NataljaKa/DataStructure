import BinaryTree from "../methods/binaryTree"

const treeNumber = new BinaryTree();
treeNumber.addValue(1);
treeNumber.addValue(8);

test("number values", () => {
    expect(treeNumber.addValue(5)).toEqual({ "value": 1, "right": { "value": 8, "left": { "value": 5 } } })
});

test("duplicated value", () => {
    expect(treeNumber.addValue(5)).toEqual({ "value": 1, "right": { "value": 8, "left": { "value": 5 } } })
});

const treeSymbol = new BinaryTree();
treeSymbol.addValue("kh");
treeSymbol.addValue("b");
treeSymbol.addValue("3");

test("symbols", () => {
    expect(treeSymbol.addValue("ar")).toEqual({ value: 'kh', left: { value: 'b', left: { value: '3', right: { value: 'ar' } } } })
});
