//https://www.codewars.com/kata/5c743cec901022438549964a/train/javascript
const createIterator = (array) => {
  let index = 0;
  return {
    next() {
      return {
        value: array[index],
        done: index >= array.length ? ((index = array.length), true) : (index++, false),
      };
    },
    get index() {
      return index;
    },
  };
};
