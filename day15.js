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
