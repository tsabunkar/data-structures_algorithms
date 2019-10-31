function hash(keyStr, arrayLength) {
  let total = 0;
  const PRIME = 31;
  for (let i = 0; i < Math.min(keyStr.length, 100); i++) {
    const char = keyStr[i];
    let codeVal = char.charCodeAt(0) - 96;
    total = (total * PRIME + codeVal) % arrayLength;
  }
  return total;
}

console.log(hash('pink', 10));
console.log(hash('red', 10));
console.log(hash('cyan', 10));
