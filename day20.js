//https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript
const countAnimals = (animals,count) => {
  const arrOfMatches = [];
  for (let i = 0; i < count.length; i++) {
    arrOfMatches.push((animals.match(new RegExp(count[i], "g")) || []).length);
  };
  return arrOfMatches;
}
//
