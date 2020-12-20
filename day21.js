//https://www.codewars.com/kata/573d11c48b97c0ad970002d4/train/javascript
let regex = /(http:\/\/|https:\/\/)[a-z0-9\.]+(\.com|\.net)/ig;
// http://www.codewars.com/kata/573e6831e3201f6a9b000971/train/javascript
let regex = /\b(\w)(\w?)(\w?).?\3\2\1\b/g
//https://www.codewars.com/kata/573fb9223f9793e485000453/train/javascript
const regex=/(\d)(?=(\d{3}){1,}$)/g;
const addCommas = (money, regex) => {
  return money.replace(regex, x => x + ",");
}
