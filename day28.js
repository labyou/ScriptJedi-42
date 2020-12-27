//https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript
function always (n) {
  return function () {
    return n;
  }
}
//https://www.codewars.com/kata/singleton-pattern/train/javascript
const Singleton = function(){
  let instance;
  if(Singleton.instance) {
    return Singleton.instance;
  }
  Singleton.instance = this;
};
