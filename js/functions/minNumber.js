const min = (number1, number2) => {
  return number1 > number2 ? number2 : number1;
};

console.log(min(2, 5));
console.log(min(10, 8));
console.log(min(3, 3));
console.log(min(2, -123));
