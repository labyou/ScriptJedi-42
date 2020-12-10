https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
 function alienLanguage(str) {
   const splitedStr = str.split(" ");
   const newStr = [];
   for(let i = 0; i < splitedStr.length; i++) {
     const lastLetter = splitedStr[i].slice(-1).toLowerCase();
     const elseLetters = splitedStr[i].slice(0, -1).toUpperCase();
     const concatLetters = elseLetters + lastLetter;
    newStr.push(concatLetters);
   }
   return newStr.join(' ');
}
________________________________________________

//https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript
//dont work propertly
function topSecret(str){
	const newStr = str.split('');
	const encrypted = [];
	for (let i = 0; i < newStr.length; i++) {
		let letter;
		const unicodeNumber = newStr[i].charCodeAt();
		if (unicodeNumber <= 67 && unicodeNumber >= 65) {
			letter = (newStr[i] = String.fromCharCode(unicodeNumber + 23));
		} else if (unicodeNumber >= 97 && unicodeNumber <= 99) {
			letter = (newStr[i] = String.fromCharCode(unicodeNumber + 23));
		
		} else if (unicodeNumber === 32 || unicodeNumber === 33) { 
			letter = (newStr[i] = String.fromCharCode(unicodeNumber));
		} else {
			letter = (newStr[i] = String.fromCharCode(unicodeNumber - 3));
		}
		encrypted.push(letter);
	}
	return encrypted.join('');
}
_________________________________________________
// //https://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s){
	const newStrValue = s.trim();
	return(`${newStrValue.repeat(1)}\n${newStrValue.repeat(2)}\n${newStrValue.repeat(3)}\n${newStrValue.repeat(4)}\n${newStrValue.repeat(5)}`);
}
