//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  if (s1.size === s2.size) {
    for (const value of s1) {
      if (!s2.has(value)) return false;
    }
    return true;
  } else return false;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}
