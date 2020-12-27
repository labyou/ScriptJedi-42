//http://www.codewars.com/kata/power-bind
Function.prototype.bind = function(ctx){
  let func = this;
  return function(...args){
    if(this == global) return func.apply(ctx, args);
    else return func.apply(this, args);
  };
};
//https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript
const OrderPeople = people => {
  return people.sort( (a,b) => a.age - b.age ); //complete this function
}
