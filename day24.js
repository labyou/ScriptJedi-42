//https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
const solution = (...arr) => {
  const settedArr = Array.from(new Set(arr));
  if (settedArr.length === arr.length) {
    return false
  } else return true; 
}
//https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
function last(list) {
  let lastOfArg = arguments[arguments.length - 1];
  return lastOfArg[lastOfArg.length - 1] || lastOfArg;
}
