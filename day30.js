//https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
const isSantaClausable = (obj) => {
  const trueSanta = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']
  return trueSanta.every(i => typeof obj[i] === 'function');
}
//https://www.codewars.com/kata/52e5e86b2ff32887280002e4/train/javascript
class Cylon {
  constructor (model) {
    this.model = model;
  }
  attack() {return 'Destroy all humans!'}
}

class HumanSkin extends Cylon{
  constructor (model) {
    super(model);
  }
  infiltrate() {return 'Infiltrate the colonies'} 
}
//https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
class Router {
  constructor() {
    this.data = new Map();
  }  
  bind(url, method, func) {
    this.data.set(url + ':' + method, func);
  }
  runRequest(url, method) {
    if (!this.data.has(url + ':' + method)) {
      return 'Error 404: Not Found';
    }
      return this.data.get(url + ':' + method)();
    }
}
