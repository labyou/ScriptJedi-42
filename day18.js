//http://tddbin.com/#?kata=es6/language/array-api/from 
describe('`Array.from` converts an array-like object or list into an Array', () => {
  const arrayLike = {0: 'one', 1: 'two', length: 2};
  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike);
    assert.deepEqual(arr, ['one', 'two']);
  });
  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    const classList = Array.from(domNode.classList);
    assert.equal(''+classList, ''+['some', 'other']);
  });
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.createElement('span');
    const divs = Array.from(nodeList).filter((node) => node.tagName === 'div');
    assert.deepEqual(divs.length, 0);
  });
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });
    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(arrayLike, (value, key) => `${key}=${value}`);
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
});
//http://tddbin.com/#?kata=es6/language/array-api/of
describe('`Array.of` creates an array with the given arguments as elements', () => {
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array.of(10);
    assert.deepEqual(arr, [10]);
  });
  it('puts all arguments into array elements', () => {
    const arr = Array.of(1, 2);
    assert.deepEqual(arr, [1, 2]);
  });
  it('takes any kind and number of arguments', () => {
    const starter = [[1, 2]];
    const end = [3, '4'];
    const arr = Array.of(...starter, ...end);
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
});
//http://tddbin.com/#?kata=es6/language/array-api/fill
describe('`Array.prototype.fill` can fill up an array with one value', () => {
  it('`fill(0)` will populate `0` into each array element', function() {
    const arr = new Array(3).fill(0);
    assert.deepEqual(arr, [0, 0, 0]);
  });
  it('fill only changes content, adds no new elements', function() {
    const arr = [].fill(0);
    assert.deepEqual(arr, []);
  });
  it('second parameter to `fill()` is the position where to start filling', function() {
    const fillPosition = 2;
    const arr = [1,2,3].fill(42, fillPosition);
    assert.deepEqual(arr, [1, 2, 42]);
  });
  it('third parameter is the position where filling stops', function() {
    const fillStartAt = 1;
    const fillEndAt = 2;
    const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
    assert.deepEqual(arr, [1, 42, 3]);
  });
});
//http://tddbin.com/#?kata=es6/language/array-api/find
describe('`Array.prototype.find` makes finding items in arrays easier', () => {
  it('takes a compare function', function() {
    const found = [true].find(i => i === true);
    assert.equal(found, true);
  });
  it('returns the first value found', function() {
    const found = [0, 2].find(item => item > 1);
    assert.equal(found, 2);
  });
  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item > 3);
    assert.equal(found, void 0);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name}) => name === 'Alice');
    assert.equal(found, alice);
  });
});
//http://tddbin.com/#?kata=es6/language/array-api/findIndex
describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {
  it('takes a compare function, returns the index where it returned true', function() {
    const foundAt = [false, true].findIndex(i => i === true);
    assert.equal(foundAt, 1);
  });
  it('returns the first position it was found at', function() {
    const foundAt = [0, 1, 1, 1].findIndex(item => item === 1);
    assert.equal(foundAt, 1);
  });
  it('returns `-1` when nothing was found', function() {
    const foundAt = [1, 2, 3].findIndex(item => item > 3);
    assert.equal(foundAt, -1);
  });
  it('the findIndex callback gets the item, index and array as arguments', function() {
    const three = 3;
    const containsThree = arr => arr.indexOf(three) > -1;
    function theSecondThree(item, index, arr) {
      const preceedingItems = arr.slice(0, index);
      return containsThree(preceedingItems);
    }
    const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);
    assert.equal(foundAt, 4);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const foundAt = [bob, alice].findIndex(({name:{length}}) => length > 3);
    assert.equal(foundAt, 1);
  });
});
//http://tddbin.com/#?kata=es6/language/array-api/entries
describe('`[].entries()` returns an iterator object with all entries', function() {
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.entries());
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  it('empty elements contain the value `undefined`', function() {
    const arr = ['one'];
    arr[2] = "three";
    const secondValue = Array.from(arr.entries())[1];
    assert.deepEqual(secondValue, [1, void 0]);
  });
  describe('returns an iterable', function() {
    it('has `next()` to iterate', function() {
      const arr = ['one'];
      const value = arr.entries().next().value;
      assert.deepEqual(value, [0, 'one']);
    });
  });
});
//http://tddbin.com/#?kata=es6/language/array-api/keys
describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {
  it('`keys()` returns an iterator', function() {
    const arr = ['a'];
    const iterator = arr.keys(0);
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('gets all keys', function() {
    const arr = ['a', 'b', 'c'];
    const keys = Array.from(arr.keys());
    assert.deepEqual(keys, [0, 1, 2]);
  });
  it('empty array contains no keys', function() {
    const arr = [];
    const keys = [...arr.keys()];
    assert.equal(keys.length, 0);
  });
  it('a sparse array without real values has keys though', function() {
    const arr = [0, 1];
    const keys = [...arr];
    assert.deepEqual(keys, [0, 1]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a',  , 'c'];
    const keys = [...arr.keys()];
    assert.deepEqual(keys, [0, 1, 2]);
  });
});
//http://tddbin.com/#?kata=es6/language/array-api/values
describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', function() {
    const arr = [];
    const iterator = arr.values();
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('use `iterator.next()` to drop first value', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next();
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  it('empty array contains no values', function() {
    const arr = [];
    const values = [...arr.values()];
    assert.equal(values.length, 0);
  });
  it('a sparse array without real values has values though', function() {
    const arr = [, ,];
    const keys = [...arr.values()];
    assert.deepEqual(keys, [void 0, void 0]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a', , 'c'];
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
});
