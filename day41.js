//https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript
function* generator() {
  let i = 1;
  while (true) {
    let v = yield i++;
    if (v !== undefined) i = v;
  }
}

//https://www.codewars.com/kata/5637ead70013386e30000027/train/javascript
function* generator(n) {
  let i = 1;
  while (true) {
    let v = yield `${n} x ${i} = ${n * i++}`;
  }
}
