function mirrorStr(str) { return str.split("").reverse().join("") }

function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/([^a-z0-9])*/g, "");
  let mirrored = mirrorStr(str);
  return str == mirrored ? true : false;
}



palindrome("  3333  ");