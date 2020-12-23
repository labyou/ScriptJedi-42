//http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function(param, ...args) {
  return this.apply(param, args);
}
