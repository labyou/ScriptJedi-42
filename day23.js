//https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript
function spread(func, args) {
  return func(...args);
}
//https://www.codewars.com/kata/5258b272e6925db09900386a/train/javascript
//1st version
const numbers = (...arg) => {
   if (arg.some(el => typeof el != 'number')) return false 
   else return true;
}
//2nd version
const numbers = (...arg) => {
   return arg.every(el => typeof el === 'number');
}
