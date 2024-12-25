function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return false;
  }
  if (a + 1 > b) { // Added base case
    return false; //Correct return statement
  }
  return foo(a + 1, b);
}

console.log(foo(10, 10)); //true
console.log(foo(10, 11)); //false
console.log(foo(10, 12));//false