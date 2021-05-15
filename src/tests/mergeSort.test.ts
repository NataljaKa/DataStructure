import { mergeSort } from "../methods/mergeSort";

function compare<T>(a: T, b: T): number {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

test("empty array", () => {
  expect(mergeSort([], compare)).toEqual([])
});

test("array", () => {
  expect(mergeSort([5, -4, 3, 3], compare)).toEqual([-4, 3, 3, 5])
});

test("array", () => {
  expect(mergeSort(["b", "a", "c"], compare)).toEqual(["a", "b", "c"])
});