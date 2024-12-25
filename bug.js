function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return false;
  }
  return foo(a + 1, b);
}

console.log(foo(10, 10)); //true
console.log(foo(10, 11)); //true
console.log(foo(10, 12));//true