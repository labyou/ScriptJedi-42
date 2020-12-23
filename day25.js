//http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function(param, ...args) {
  return this.apply(param, args);
}
//http://www.codewars.com/kata/anonymous-returns
const name = 'The Window';

let alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return function() {
            return this.name;
        }.bind(alpha);
    }
};
