/* Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

/**
 * @param {number[]} str
 * @return {string} the longest word in the string
 */
const longestWord = function (str) {
  let lWord = ''
  let word = ''
  for (let v of str) {
    if (v.toLowerCase() != v.toUpperCase()) {
      word += v
    }
    if (v === ' ' || str.indexOf(v) === str.length - 1) {
      if (word.length > lWord.length) lWord = word
      word = ''
    }
  }
  return lWord
}

function LongestWord2(sen) {
  return sen.match(/\w+/g).reduce((item, next) => item.length >= next.length ? item : next);
}

function LongestWord3(sen) {

  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');

  let longest = ""

  var arr = sen.split(" ").forEach(word => {
    if (word.length > longest.length) longest = word;
  })

  return longest;

}

console.log('Solution 1')
console.log(longestWord("fun&!! time"))
console.log(longestWord("I love dogs"))
console.log()

console.log('Solution 2')
console.log(LongestWord2("fun&!! time"))
console.log(LongestWord2("I love dogs"))
console.log()

console.log('Solution 3')
console.log(LongestWord3("fun&!! time"))
console.log(LongestWord3("I love dogs"))
console.log()
