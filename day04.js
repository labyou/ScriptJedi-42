//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
function padIt(str, n) {
  let counter = 0;
  while (counter < n) {
    if (counter % 2 == 0) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    counter++;
  }
  return str;
}
_______________________________________________________________________;
//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}
______________________________________________________________________;
//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
function grabDoll(dolls) {
  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length == 3) {
      break;
    }
    if (dolls[i] == "Hello Kitty") {
      bag.push(dolls[i]);
    } else if (dolls[i] == "Barbie doll") {
      bag.push(dolls[i]);
    } else {
      continue;
    }
  }
  return bag;
}
______________________________________________________________________;
//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/solutions/javascript
function giveMeFive(obj) {
  //coding here
  let five = [];
  for (let key in obj) {
    if (key.length === 5) {
      five.push(key);
    }
    if (obj[key].length === 5) {
      five.push(obj[key]);
    }
  }
  return five;
}
