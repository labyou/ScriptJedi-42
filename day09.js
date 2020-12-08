//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
 const minStrLength = (Math.min(...arr.map(str => str.length)));
 const myArr = arr.map(str => str.slice(0,minStrLength));
 return myArr;
}
_________________________________________________________________
//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str,c) {
  if (str.includes(c)) {
    const firstCIndex = str.search(c);
    const lastCIndex = str.lastIndexOf(c);
    return lastCIndex - firstCIndex;
  } else return -1;
}
_________________________________________________________________
//
