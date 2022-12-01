it("should work", () => {
  expect(1).toBe(2);
});

function search(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;
  do {
    const currentIndex = Math.floor(left + Math.floor((right - left) / 2));
    const current = numbers[currentIndex];
    if (current === target) {
      return currentIndex;
    }
    if (current > target) {
      right = currentIndex;
    } else {
      left = currentIndex;
    }
  } while (left <= right);

  return -1;
}

it("should search", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});
