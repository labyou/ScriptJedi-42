//http://tddbin.com/#?kata=es6/language/generator/creation

describe('Generators can be created in multiple ways', function() {
  it('the most common way is by adding `*` after `function`', function() {
    function* g() {}
    assertIsGenerator(g());
  });
  it('as a function expression, by adding a `*` after `function`', function() {
    let g = function*() {};
    assertIsGenerator(g());
  });
  it('inside an object by prefixing the function name with `*`', function() {
    let obj = {
      *g() {}
    };
    assertIsGenerator(obj.g());
  });
  it('computed generator names, are just prefixed with a `*`', function() {
    const generatorName = 'g';
    let obj = {
      *[generatorName]() {}
    };
    assertIsGenerator(obj.g());
  });
  it('inside a class the same way', function() {
    const generatorName = 'g';
    class Klazz {
      *[generatorName]() {}
    }
    assertIsGenerator(new Klazz().g());
  });

  function assertIsGenerator(gen) {
    const toStringed = '' + gen;
    assert.equal(toStringed, '[object Generator]');
  }
});

//http://tddbin.com/#?kata=es6/language/generator/iterator

describe('Generators returns an iterable object', function() {
  function* generatorFunction(){
    yield 1;
    yield 2;
  }
  let generator;
  beforeEach(() => {
    generator = generatorFunction();
  });
  it('a generator returns an object', function() {
    const typeOfTheGenerator = 'object';
    assert.equal(typeOfTheGenerator, typeof generator);
  });
  it('a generator object has a key `Symbol.iterator`', function() {
    const key = Symbol.iterator;
    assert.equal(key in generator, true);
  });
  it('the `Symbol.iterator` is a function', function() {
    const theType = typeof generator[Symbol.iterator];
    assert.equal(theType, 'function');
  });
  it('can be looped with `for-of`, which expects an iterable', function() {
    function iterateForOf(){
      for (let value of generator) {
        // no statements needed
      }
    }
    assert.doesNotThrow(iterateForOf);
  });
});

//http://tddbin.com/#?kata=es6/language/generator/yield

describe('Generator - `yield` is used to pause and resume a generator function', () => {
  function* generatorFunction() {
    yield 'hello';
    yield 'world';
  }
  let generator;

  beforeEach(function() {
    generator = generatorFunction();
  });
  it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
    let values = Array.from(generator);
    assert.deepEqual(values, ['hello', 'world']);
  });
  describe('after the first `generator.next()` call', function() {
    it('the value is "hello"', function() {
      const {value} = generator.next();
      assert.equal(value, 'hello');
    });
    it('and `done` is false', function() {
      const {done} = generator.next();
      assert.equal(done, false);
    });
  });
  describe('after the second `next()` call', function() {
    let secondItem;
    beforeEach(function() {
      generator.next();
      secondItem = generator.next();
    });
    it('`value` is "world"', function() {
      let {value} = secondItem;
      assert.equal(value, 'world');
    });
    it('and `done` is still false', function() {
      const {done} = secondItem;
      assert.equal(done, false);
    });
  });
  describe('after stepping past the last element, calling `next()` that often', function() {
    it('`done` property equals true, since there is nothing more to iterator over', function() {
      generator.next();
      generator.next();
      let done = true;
      assert.equal(done, true);
    });
  });
});

//http://tddbin.com/#?kata=es6/language/generator/send-value

describe('Pass a value to a generator', () => {
  it('basics: get the values from a generator in two ways', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    // way #1
    var convertedToAnArray = Array.from(generatorFunction());
    // way #2
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next().value];
    assert.deepEqual(iteratedOver, convertedToAnArray);
  });
  it('pass a value to the iterator', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(2).value];
    assert.deepEqual(iteratedOver, [1, 2]);
  });
  it('a value passed to the 1st `next()` call is ignored', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    let iterator = generatorFunction();
    const values = [
      iterator.next('irrelevant').value, 
      iterator.next(2).value
    ];
    assert.deepEqual(values, [1, 2]);
  });
});

//

