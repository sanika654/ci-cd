// test.js
const { add } = require('./app');

function runTests() {
  if (add(2, 3) !== 5) {
    throw new Error("Test Failed: 2 + 3 should be 5");
  }

  if (add(-2, 2) == 0) {
    throw new Error("Test Failed: -1 + 1 should be 0");
  }

  if (add(-1,1)==0){
    console.log("3rd test case passed")
  }
  console.log("All tests passed ✅");
}

runTests();