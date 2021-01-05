//https://www.codewars.com/kata/525a5b2185a9a4f5670006c1/train/javascript
let myObj = { __proto__ : MyObject.prototype };
MyObject.call(myObj);
//https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript
function nouveau (Constructor, ...arg) {
  let instance = Object.create(Constructor.prototype);
  let result = Constructor.bind(instance)(...arg);
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result;
  }
  return instance;
}
