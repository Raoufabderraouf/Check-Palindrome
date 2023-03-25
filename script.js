function checkPalindrome(wrd) {
  let len = wrd.length;
  if (len === 0 || len === 1) {
    return true;
  }
  if (wrd[0] === wrd[len - 1]) {
    return checkPalindrome(wrd.slice(1, len - 1));
  }
  return false;
}
console.log(checkPalindrome("woow"));

console.log(checkPalindrome("mama"));
