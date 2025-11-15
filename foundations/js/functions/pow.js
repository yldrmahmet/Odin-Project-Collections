const pow = (x, n) => {
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
    return null;
  }

  while (n > 0) {
    x = x * x;
    n = -1;
  }
  return x;
};

console.log(pow(3, 2));
console.log(pow(5, 2));
console.log(pow(1, 100));
console.log(pow(12, -4));
