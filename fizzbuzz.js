const isFizz = (int) => int % 3 === 0;
const isBuzz = (int) => int % 5 === 0;

function fizzbuzz(int) {
  if (int === 0) {
    return String(int);
  }

  if (isFizz(int) && isBuzz(int)) {
    return "Fizzbuzz";
  }

  if (isFizz(int)) {
    return "Fizz";
  }

  if (isBuzz(int)) {
    return "Buzz";
  }

  return String(int);
}

//Example
const int = 15;
console.log(`fizzbuzz(${int})`, fizzbuzz(int));

//0...100
const loopExample = () => {
  for (let index = 0; index < 100; index++) {
    console.log(`fizzbuzz(${index})`, fizzbuzz(index));
  }
};
// loopExample();

module.exports = fizzbuzz;
