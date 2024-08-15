
const calculator = require('./calculator');
const showMsg = require('./showMsg');

const sum = calculator.add(20, 10);
const diff = calculator.sub(20, 10);

showMsg(`sum is ${sum}`);
showMsg(`difference is ${diff}`);
