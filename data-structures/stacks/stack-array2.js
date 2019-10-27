let stack = [];

// Unshift/Add element to the last
stack.unshift('Create new file');
stack.unshift('Resized file');
stack.unshift('Upload to cloud file');
console.log(stack);

// Shift/Remove element from the first
stack.shift();
console.log(stack);
