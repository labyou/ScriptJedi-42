//https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(body, tail){
  let sub = body.substr(body.length - (tail.length));
  if (sub == tail) {
    return true;
  } else { 
    return false;
  }
}
_________________________________________________________________
//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
function bonusTime(salary, bonus) {
  if (bonus == true) {
    salary *= 10;
  }
  return "\u00A3" + salary;
}
_________________________________________________________________
//https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
function automorphic(n){
  let number = String((Math.pow(n, 2)));
  if ((number.slice(0)).includes(n)) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}
