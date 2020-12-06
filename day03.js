//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
  if (val) return "true";         
  else return "false";
}
__________________________________________________
//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(n) {
  if (n < 5) return 100 * n;
  else if ((n >= 5) & (n < 10)) return 95 * n;
  else return 90 * n;
}
___________________________________________________
//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
function howManydays(month) {
  let days;
  switch (month) {
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
      
    default:
      days = 31;
  }
  return days;
