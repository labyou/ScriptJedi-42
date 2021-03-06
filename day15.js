//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript
let shuffleIt = (arr, ...arrsOfIndex) => {
  let array = arr;
  for (let i = 0; i < arrsOfIndex.length; i++) {
    let arrayOfIndex = arrsOfIndex[i];
    let firstIndex = arrayOfIndex[0];
    let lastIndex = arrayOfIndex[1];
    [array[firstIndex], array[lastIndex]] = [array[lastIndex], array[firstIndex]];
  }
  return array;
}
//https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
let infiniteLoop = (arr, d, n) => {
  const array = arr;
  for (let i = 1; i <= n; i++) {
    if (d === 'left') {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    } else if (d === 'right') {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return array;
}
//https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
let threeInOne = arr => {
  const array = [...arr];
  let res = [];
  for (let i = 0; i < array.length; i += 3) {
    let arraySliced = array.slice(i, i + 3).reduce((acc, val) => acc + val);
    res = [...res, arraySliced];
  } 
  return res;
}
//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript
//ЗАДАЧА ЯКУ ВИ СКИНУЛИ В ДІСКОРД
const loopArr = (arr, d, s) => {
  const array = arr;
  for(let i = 0; i < s; i++) { 
    if (d === 'left') {
      array.push(array.shift());
    } else if (d === 'right') {
      array.unshift(array.pop());
    }
  }
  return array;
}
