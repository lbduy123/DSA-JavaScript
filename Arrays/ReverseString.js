const reverseString = (str) => {
  if (!str || typeof str !== 'string' || str.length < 2) return str
  return str.split('').reverse().join('')
}

const reverseString2 = (str) => {
  str = str.split('')
  for (let i = 0; i < str.length / 2; i++) {
    let replacedChar = str[i]
    str[i] = str[str.length - i - 1]
    str[str.length - i - 1] = replacedChar
  }
  return str.join('')
}

const reverseString3 = str => [...str].reverse().join('')

console.log(reverseString('lbduy123'))
console.log(reverseString2('lbduy123'))
console.log(reverseString3('lbduy123'))