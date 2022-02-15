// math/add.js
export function product(...numbers) {
  return numbers.reduce((acc, n) => n * acc, 1);
}
