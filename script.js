// Correct version of firstChar
function firstChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i];
    }
  }
  return '';
}

// Example usage: Pass the string obtained from prompt
let text = prompt("Enter a string");
alert(firstChar(text))

