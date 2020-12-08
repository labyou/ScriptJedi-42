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
__________________________________________________________________
//https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
function colorOf(r, g, b) { 
  let red = r.toString(16);
  if (red.length < 2) red = "0" + red;
  let green = g.toString(16);
  if (green.length < 2) green = "0" + green; 
  let blue = b.toString(16);
  if (blue.length < 2) blue = "0" + blue;
  return `#${red + green + blue}`;
}
__________________________________________________________________
//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
function howManySmaller(arr,n) {
  return arr.filter(number => Number(number.toFixed(2)) < n).length;
}
