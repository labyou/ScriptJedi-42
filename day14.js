//http://tddbin.com/#?kata=es6/language/symbol/basics
describe('Symbol', function() {
  it('`Symbol` lives in the global scope', function(){
    let actual = Symbol;
    assert.equal(actual, Symbol);
  });
  it('every `Symbol()` is unique', function(){
    const sym1 = Symbol();
    const sym2 = Symbol();
    assert.notEqual(sym1, sym2);
  });
  it('every `Symbol()` is unique, also with the same parameter', function(){
    var sym1 = Symbol('foo');
    var sym2 = Symbol('foo');
    assert.notEqual(sym1, sym2);
  });
  it('`typeof Symbol()` returns "symbol"', function(){
    const theType = typeof Symbol();
    assert.equal(theType, 'symbol');
  });
  it('`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects', function(){
    function fn() {
      let a = new Symbol();
    }
    assert.throws(fn);
  });
});
//http://tddbin.com/#?kata=es6/language/symbol/for
describe('`Symbol.for` for registering Symbols globally', function() {
  it('creates a new symbol (check via `typeof`)', function() {
    const symbolType = typeof Symbol.for('symbol');
    assert.equal(symbolType, 'symbol');
  });
  it('stores the symbol in a runtime-wide registry and retrieves it from there', function() {
    const sym = Symbol.for('new symbol');
    const sym1 = Symbol.for('new symbol');
    assert.equal(sym, sym1);
  });
  it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
    var globalSymbol = Symbol.for('new symbol');
    var localSymbol = Symbol('new symbol');
    assert.notEqual(globalSymbol, localSymbol);
  });
  describe('`.toString()` on a Symbol', function() {
    it('also contains the key given to `Symbol.for()`', function() {
      const description = Symbol('new symbol').toString();
      assert.equal(description, 'Symbol(new symbol)');
    });
    describe('NOTE: the description of two different symbols', function() {
      it('might be the same', function() {
        const symbol1AsString = Symbol('new symbol 1').toString();
        const symbol2AsString = Symbol.for('new symbol 1').toString();
        assert.equal(symbol1AsString, symbol2AsString);
      });
      it('but the symbols are not the same!', function() {
        const symbol1 = Symbol.for('new symbol');
        const symbol2 = Symbol.for('new symbol 1');
        assert.notEqual(symbol1, symbol2);
      });
    });    
  });
});
//http://tddbin.com/#?kata=es6/language/symbol/keyFor
describe('`Symbol.keyFor()` gets the symbol key for a given symbol', function() {
  it('pass the symbol to `keyFor()` and you get its key', function() {
    const key = Symbol.keyFor(Symbol.for('foo'));
    assert.equal(key, 'foo');
  });
  it('local symbols are not in the runtime-wide registry', function() {
    // Hint: `Symbol()` creates a local symbol!
    const localSymbol = Symbol('foo');
    const key = Symbol.keyFor(localSymbol);
    assert.equal(key, void 0);
  });
  it('predefined symbols are not in the runtime-wide registry either', function() {
    const key = Symbol.keyFor(Symbol('foo'));
    assert.equal(key, void 0);
  });
  it('for non-Symbols throws an error', function() {
    function fn() {
      Symbol.keyFor(Symbol.for(x));
    }
    assert.throws(fn);
  });
});
