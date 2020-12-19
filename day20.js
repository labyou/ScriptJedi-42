//https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript
const countAnimals = (animals,count) => {
  const arrOfMatches = [];
  for (let i = 0; i < count.length; i++) {
    arrOfMatches.push((animals.match(new RegExp(count[i], "g")) || []).length);
  };
  return arrOfMatches;
}
//https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript
const findSimilarity = (str, word) => {
  let regstr = word.replace(/./g,".")
               .replace(/^./,word[0])
               .replace(/.$/,word.slice(-1));
  let regexp = new RegExp("^" + regstr + "$","i");
  return str.split(' ').filter(x => regexp.test(x)).join(' ');
}
//
