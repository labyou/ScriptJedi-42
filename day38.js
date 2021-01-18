//http://tddbin.com/#?kata=es6/language/iterator/array

describe('The native array is a built-in iterable object', function() {
  const arr = ['a', 'B', 'see'];
  describe('the iterator', function() {
    it('an array has an iterator, which is a function', function() {
      const iterator = arr[Symbol.iterator];
      const theType = typeof iterator;
      const expected = 'function';
      assert.equal(theType, expected);
    });
    it('can be looped with `for-of`, which expects an iterable', function() {
      let count = 0;
      for (let value of arr) {
        count++;
      }
      assert.equal(count, arr.length);
    });
  });
  describe('the iterator protocol', function() {
    it('calling `next()` on an iterator returns an object according to the iterator protocol', function() {
      const iterator = arr[Symbol.iterator]();
      const firstItem = iterator.next();
      assert.deepEqual(firstItem, {done: false, value: 'a'});
    });
    it('the after-last element has done=true', function() {
      const arr = [];
      const iterator = arr[Symbol.iterator]();
      const afterLast = iterator.next();
      assert.deepEqual(afterLast, {done: true, value: void 0});
    });
  });
});

//http://tddbin.com/#?kata=es6/language/iterator/string

describe('The native string is a built-in iterable object', function() {
  
  const s = 'abc';
  
  describe('string is iterable', function() {
    it('the string`s object key `Symbol.iterator` is a function', function() {
      const isA = typeof s[Symbol.iterator];
      assert.equal(isA, 'function');
    });
    it('use `Array.from()` to make an array out of any iterable', function(){
      const arr = Array.from(s);
      assert.deepEqual(arr, ['a', 'b', 'c']);
    });
  });
  
  describe('a string`s iterator', function() {
    let iterator;
    beforeEach(function() {
      iterator = s[Symbol.iterator]();
    });
    it('has a special string representation', function(){
      const description = iterator.toString();
      assert.equal(description, '[object String Iterator]');
    });
    it('`iterator.next()` returns an object according to the iterator protocol', function(){
      const value = iterator.next();
      assert.deepEqual(value, {done: false, value: 'a'});
    });
    it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
      iterator.next();
      iterator.next();
      iterator.next();
      assert.equal(iterator.next().done, true);
    });
  });
});

//http://tddbin.com/#?kata=es6/language/iterator/protocol

describe('A simple iterable without items inside, implementing the right protocol', () => {

  function iteratorFunction() {
    return {
      next: () => {
        return { done: true }
      }
    }
  }

  describe('the `iteratorFunction` needs to comply to the iterator protocol', function() {
    it('must return an object', function() {
      assert.equal(typeof iteratorFunction(), 'object');
    });
    it('the object must have a function assigned to a key `next`', function() {
      assert.equal(typeof iteratorFunction().next, 'function');
    });
    it('calling `next()` must return an object with `{done: true}`', function() {
      assert.deepEqual(iteratorFunction().next(), {done: true});
    });
  });

  let iterable;
  beforeEach(function() {
    iterable = {
      [Symbol.iterator]: iteratorFunction
    }
  });

  describe('the iterable', function() {
    it('must be an object', function() {
      assert.equal(typeof iterable, 'object');
    });
    it('must have the iterator function assigned to the key `Symbol.iterator`', function() {
      assert.equal(iterable[Symbol.iterator], iteratorFunction);
    });
  });
  describe('using the iterable', function() {
    it('it contains no values', function() {
      let values = '';
      for (let value of iterable) {
        values += value;
      }
      assert.equal(values, '');
    });
    it('has no `.length` property', function() {
      const hasLengthProperty = !(typeof iterable.length);
      assert.equal(hasLengthProperty, false);
    });
    describe('can be converted to an array', function() {
      it('using `Array.from()`', function() {
        const arr = Array.from(iterable);
        assert.equal(Array.isArray(arr), true);
      });
      it('where `.length` is still 0', function() {
        const arr = iterable;
        const length = !!arr.length;
        assert.equal(length, 0);
      });
    });
  });
});

//http://tddbin.com/#?kata=es6/language/iterator/usages

class ConsumableUsers {
  constructor() {
    this.users = ['Alice', 'Bob'];
    this.isEmpty = false;
  }
  get nextUser() {
    if (this.users.length > 0) {
      return `user: ${this.users.shift()}`;
    }
    this.isEmpty = true;
    return undefined;
  }
  get anyLeft() {
    return !this.isEmpty;
  }
}

describe('Iterator usages', () => {

  let usersIterable;
  beforeEach(function(){
    const consumableUsers = new ConsumableUsers();
    function iteratorFunction() {
      return {
        next: function() {
          return {value: consumableUsers.nextUser, done: !consumableUsers.anyLeft}
        }
      }
    }
    
    usersIterable = {
      [Symbol.iterator]: iteratorFunction
    };
  });
  
  describe('create an iterator/iterable', function() {
    it('the `usersIterable` should be iterable', function() {
      const isIterable = Symbol.iterator in usersIterable;
      assert.equal(isIterable, true);
    });
    
    it('the iterator of `usersIterable` should return an object', function() {
      const iterator = usersIterable[Symbol.iterator]();
      assert.equal(typeof iterator, 'object');
    });
    
    it('the iterator of `usersIterable` should have a next function', function() {
      const iterator = usersIterable[Symbol.iterator]();
      assert.equal(typeof iterator.next, 'function');
    });
  });
  
  describe('fill the iterable with content using `ConsumableUsers`', function() {
    
    describe('using the iterator', function() {
      let iterator;
      beforeEach(function(){
        iterator = usersIterable[Symbol.iterator]();
      });
      it('should return `Alice` as first user', function() {
        const firstItem = iterator.next();
        assert.deepEqual(firstItem, {value: "user: Alice", done: false});
      });
      it('should return `Bob` as second user', function() {
        iterator.next(); // drop the first item
        const secondItem = iterator.next();
        assert.deepEqual(secondItem, {value: "user: Bob", done: false});
      });
      it('should return `done:true`, which means there are no more items', function() {
        iterator.next();
        iterator.next();
        const beyondLast = iterator.next();
        assert.deepEqual(beyondLast, {value: void 0, done: true});
      })
    });
    
    describe('using built-in constructs', function() {
      it('use `Array.from()` to convert an iterable to an array', function() {
        const users = Array.from(usersIterable);
        assert.deepEqual(users, ['user: Alice', 'user: Bob']);
      });
      it('use for-of to loop over an iterable', function() {
        const users = [];
        for (let user of usersIterable) users.push(user);
        assert.deepEqual(users, ['user: Alice', 'user: Bob']);
      });
      it('use the spread-operator to convert/add iterable to an array', function() {
        const users = ['noname', ...usersIterable];
        assert.deepEqual(users, ['noname', 'user: Alice', 'user: Bob']);
      });
      it('destructure an iterable like an array', function() {
        const [firstUser, secondUser] = usersIterable;
        assert.equal(firstUser, 'user: Alice');
        assert.equal(secondUser, 'user: Bob');
      })
    });
  });
});
