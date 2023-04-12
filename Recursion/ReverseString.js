const reverseString = str => {
  if (str.length === 0) return ''
  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
}

function reverseString2(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString2(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString('lbduy123'))
console.log(reverseString2('lbduy123'))