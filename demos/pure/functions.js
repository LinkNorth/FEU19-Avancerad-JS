
function pureFunction(a, b) {
  return a + b;
}

function nonDeterministicFunction(a) {
  return a * Math.random();
}

console.log(pureFunction(10, 5));

console.log(nonDeterministicFunction(10));

function functionWithSideEffects(ar) {
  ar[0] = 2 * ar[0];

  return ar;
}

function functionWithoutSideEffects(ar) {
  const rv = [...ar];
  rv[0] = 2 * rv[0];

  return rv;
}

const ar = [3, 4, 5, 6, 7];

console.log(functionWithoutSideEffects(ar));
console.log(ar);


