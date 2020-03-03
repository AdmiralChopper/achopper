function rot13(str) { // LBH QVQ VG!
  str.charCodeAt(0);
  let splitStr = str.split("");
  console.log(splitStr)
    for (let i=0;i<splitStr.length;i++) {
      if (/[a-zA-Z]/g.test(splitStr[i])) {
        splitStr[i] = 65 + ((str.charCodeAt(i)%65 + 13) %26);
        splitStr[i] = (String.fromCharCode(splitStr[i]))
      };
    }
    console.log(splitStr.join(""))
  return splitStr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");