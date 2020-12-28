//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a
const buildFun = (n) => {
	const res = [];
	for (let i = 0; i < n; i++){
		res.push(function() {
			return i;
		});
	}
	return res;
}
//https://www.codewars.com/kata/shifty-closures/train/javascript
let greet_abe = function() {
  let name = 'Abe';
  return "Hello, " + name + '!';
};
const greet_ben = function() {
  let name = 'Ben';
  return "Hello, " + name + '!';
};
