//https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName
}
//https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript
class NamedOne {
  constructor(first, last) 
  { 
    this.firstName = first; this.lastName = last 
  }
  get fullName() { 
    return this.firstName + ' ' + this.lastName 
  }
  set fullName(full) 
  { 
    if (/ /.test(full)) [this.firstName, this.lastName] = full.split(' ') 
  }
}
