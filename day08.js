//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
function whatNumberIsIt(n) {
  if (n == Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n <= 100 & n >= 0 & n != Number.MIN_VALUE) return `Input number is ${n}`;
  else if (n == Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  else if (n == Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  else if (n == Number.NEGATIVE_INFINITY) return "Input number is Number.NEGATIVE_INFINITY";
  else if (Number.isNaN(n)) return "Input number is Number.NaN";
}
