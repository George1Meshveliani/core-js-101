function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 5 === 0) return 'Buzz';
  if (num % 3 === 0) return 'Fizz';
  return num;
}
function getFactorial(n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  }
  for (let i = n; i >= 1; i -= 1) {
    answer *= i;
  }
  return answer;
}
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) return true;
  return false;
}
function doRectanglesOverlap(/* rect1, rect2 */) {
  throw new Error('Not implemented');
}
function isInsideCircle(circle, point) {
  if (((circle.center.x - point.x) ** 2)
  + ((circle.center.y - point.y) ** 2) < (circle.radius ** 2)) return true;
  return false;
}
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const ad = str.lastIndexOf(str.charAt(i));
    const ac = str.indexOf(str.charAt(i));
    if (i === ad && i === ac) return str.charAt(i);
  }
  return null;
}
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let ax = 0;
  let bx = 0;
  if (a >= b) {
    bx = a;
    ax = b;
  } else { ax = a; bx = b; }
  let str = '';
  if (isStartIncluded === true) str += `[${ax}, ${bx}`;
  else str += `(${ax}, ${bx}`;
  if (isEndIncluded === true) str += ']';
  else str += ')';
  return str;
}
function reverseString(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    rev += str.charAt(i);
  }
  return rev;
}
function reverseInteger(num) {
  const str = num.toString();
  let rev = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    rev += str.charAt(i);
  }
  rev = Number(rev);
  return rev;
}
function isCreditCardNumber(/* ccn */) {
  throw new Error('Not implemented');
}
function getDigitalRoot(num) {
  let num1 = num;
  while (num1 > 9) {
    let sum = 0;
    while (num1 > 9) {
      sum += num1 % 10;
      num1 = parseInt(num1 / 10, 10);
    }
    sum += num1;
    num1 = sum;
  }
  return num1;
}
function isBracketsBalanced(/* str */) {
  throw new Error('Not implemented');
}
function toNaryString(num, n) {
  return num.toString(n);
}
function getCommonDirectoryPath() {
  throw new Error('Not implemented');
}
function getMatrixProduct() {
  throw new Error('Not implemented');
}
function evaluateTicTacToePosition(/* position */) {
  throw new Error('Not implemented');
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
