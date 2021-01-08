//https://www.codewars.com/kata/557e508a47c7e9adf9000062/train/javascript
Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";
//https://www.codewars.com/kata/javascript-class-like-objects
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
