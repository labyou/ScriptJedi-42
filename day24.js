//https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
const solution = (...arr) => {
  const settedArr = Array.from(new Set(arr));
  if (settedArr.length === arr.length) {
    return false
  } else return true; 
}
//
