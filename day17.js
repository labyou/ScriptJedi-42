//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
const bigToSmall = (arr) => {
  let array = [].concat(...arr);
  array = array.sort((a, b) => b - a);
  return array.join('>');
}
//https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
const tailAndHead = (arr) => {
  let array = [];
  for(let i = 0; i < arr.length - 1; i++) {
    let lastNum = arr[i] % 10;
    let firstNum = Number(String(arr[i + 1])[0]);
    array = [...array, lastNum + firstNum];
  }
  return array.reduce((a, b) => a * b); 
}
//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
const blackAndWhite = (arr) => {
  if (Array.isArray(arr)) {
    if (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) return "It's a black array";
    return "It's a white array";
  } else return "It's a fake array"; 
}
//https://www.codewars.com/kata/array-number-reduce/train/javascript
Array.prototype.reduce = function(process, initial) {
  let acc = initial || this[0];
  for(let i = initial ? 0 : 1; i < this.length; i++) {
    acc = process(acc, this[i], this);
  }
  return acc;
}
