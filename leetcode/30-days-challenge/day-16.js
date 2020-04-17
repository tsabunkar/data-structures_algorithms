/**
 * !Valid Parenthesis String
 *
 * Given a string containing only three types of characters: '(', ')' and '*', write a
 * function to check whether this string is valid. We define the validity of a string
 * by these rules:
 *
 * 1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * 2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * 3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * 4. '*' could be treated as a single right parenthesis ')' or a single left
 *   parenthesis '(' or an empty string.
 * 5. An empty string is also valid.
 *
 *
 * Input: "()" ==> Output: True
 * Input: "(*)" ==> Output: True
 * Input: "(*))" ==> Output: True
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  // left ( then check for right ) --> remove them for charArray
  // * should only act left ( only when there is unpaired )
  // * should only act right ) only when there is unpaired (
  // other wise * would be empty string

  s = s.replace('()', '');
  let characters = s.split('');
  console.log(characters);

  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      if (characters[i] === '(' && characters[j] === ')') {
        characters[i] = characters[j] = null;
        // i = i - 2;
        break;
      }
    }
  }

  console.log(characters);
  // making use of wild character to act as left, right or empty

  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      if (characters[i] === '(' && characters[j] === '*') {
        characters[i] = characters[j] = null;
        break;
      }
    }
  }

  for (let i = characters.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (characters[i] === ')' && characters[j] === '*') {
        characters[i] = characters[j] = null;
        break;
      }
    }
  }

  characters = characters.filter((elem) => elem !== null);

  return characters.some((ele) => ele === '(' || ele === ')') ? false : true;
};

// console.log(checkValidString('()'));
// console.log(checkValidString('(*)'));
// console.log(checkValidString('(*))'));
// console.log(checkValidString('())'));
// console.log(checkValidString('(*()'));
// console.log(checkValidString('((*)))'));
console.log(
  checkValidString(
    '((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()'
  )
); // expected : true
