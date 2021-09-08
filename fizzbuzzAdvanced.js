function findFirstTuple(range, moduloA, moduloB) {
  const maxRangeValue = range[range.length - 1];
  let firstTuple = null;
  let index = 0;

  do {
    const validatesModuloA = index % moduloA === 0;
    const validatesModuloB = (index + 1) % moduloB === 0;

    if (validatesModuloA && validatesModuloB) {
      firstTuple = [index, index + 1];
    }
    index++;
  } while (!firstTuple && index < maxRangeValue);

  return firstTuple;
}

function findAllTuples(range, increment, tupleA, tupleB) {
  const maxRangeValue = range[range.length - 1];
  let result = [];
  let upperTupleValue;

  if (tupleA) {
    result.push(tupleA);

    [_, upperTupleValue] = tupleA;

    for (
      let newUpperTupleValue = upperTupleValue + increment;
      newUpperTupleValue <= maxRangeValue;
      newUpperTupleValue += increment
    ) {
      result.push([newUpperTupleValue - 1, newUpperTupleValue]);
    }
  }

  if (tupleB) {
    result.push(tupleB);
    [_, upperTupleValue] = tupleB;

    for (
      let newUpperTupleValue = upperTupleValue + increment;
      newUpperTupleValue <= maxRangeValue;
      newUpperTupleValue += increment
    ) {
      result.push([newUpperTupleValue - 1, newUpperTupleValue]);
    }
  }

  return result;
}

function fizzBuzzAdvanced(range, [moduloA], [moduloB]) {
  const firstTupleRuleAThenB = findFirstTuple(range, moduloA, moduloB);
  const firstTupleRuleBThenA = findFirstTuple(range, moduloB, moduloA);
  const incrementToFindNextTuple = moduloA * moduloB;

  const allTuples = findAllTuples(
    range,
    incrementToFindNextTuple,
    firstTupleRuleAThenB,
    firstTupleRuleBThenA
  );

  return allTuples;
}

const range = Array.from(new Array(101).keys());
const result = fizzBuzzAdvanced(range, [3, "Fizz"], [5, "Buzz"]);
console.log(`result`, result);

module.exports = fizzBuzzAdvanced;
