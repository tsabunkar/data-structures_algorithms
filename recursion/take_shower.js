function takerShower() {
  return 'Showering!!';
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['poha', 'Eggs', 'Ragi'];
  return items[Math.floor(Math.random() * items.length)];
}

(function wakeUp(params) {
  console.log(takerShower());
  console.log(eatBreakfast());
  console.log('Okay read to work!!');
})();

// NOTE: Check the call stack window in chrome debugging tool : for better understanding
