//How do get nth Fibonacci number?

function fibonicce(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let fib = 1;
  let fib1 = 0;

  for (let i = 2; i <= n; i++) {
    const temp = fib;
    fib += fib1;
    fib1 = temp;
  }
  return fib;
}

module.exports = {
  fibonicce,
};
