//http://www.codewars.com/kata/572df796914b5ba27c000c90
const sortIt = (arr) => {
  const array = [...arr];
  array.sort((a,b) => {
    let aCount = arr.filter(el => el === a).length;
    let bCount = arr.filter(el => el === b).length;
    if (aCount === bCount) return b - a;
    if (aCount > bCount){ 
      return 1;
    } else return -1;
  })
  return array;
}
//https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
const isolateIt = (arr) => {
  const array = [...arr];
  return array.map(val => {
  if (val.length % 2 == 0)
  {
    return val.slice(0, val.length / 2) + '|' + val.slice(val.length / 2);
  };
  if (val.length % 2 !== 0)
  {
    return val.slice(0, val.length / 2) + '|' + val.slice((val.length / 2) + 1);
  };
  })
}
//https://www.codewars.com/kata/573023c81add650b84000429
const countGrade = (scores) => {
  let resObj = {}; 
  resObj.S = scores.filter(x => x === 100).length;
  resObj.A = scores.filter(x => x < 100 && x >= 90).length;
  resObj.B = scores.filter(x => x < 90  && x >= 80).length;
  resObj.C = scores.filter(x => x < 80  && x >= 60).length;
  resObj.D = scores.filter(x => x < 60  && x >= 0).length;
  resObj.X = scores.filter(x => x === -1).length;                       
  return resObj;  
}
//https://www.codewars.com/kata/57308546bd9f0987c2000d07
const mirrorImage = (arr) => {
  let array = arr;
  for(let i = 0; i <array.length - 1; i++){
    if(array[i].toString().split('').reverse().join('') === array[i + 1].toString()) {
    return [array[i],array[i + 1]];
    }
  }
  return [-1,-1]
}
