// setup to access input data file
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');
// convert each string item to number
const inputArr = input.split('\n').map(Number);

//loop through all the items and for each loop through all the other items to check if they add up to 2020, then multiply those two items for answer
const answerOne = (array => {
	for (let i = 0; i < inputArr.length; i++) {
		for (let j = 1; j < inputArr.length; j++) {
			if (inputArr[i] + inputArr[j] == 2020) {
				// console.log(inputArr[i], inputArr[j]); // 1137 and 883
				console.log('Part one: ', inputArr[i] * inputArr[j]); // 1003971
				return;
			}
		}
	}
})();

const answerTwo = (array => {
	for (let i = 0; i < inputArr.length; i++) {
		for (let j = 1; j < inputArr.length; j++) {
			for (let k = 2; k < inputArr.length; k++) {
				// for some reason 0 is included in the array when ran, which ruins the answer, so checking that
				if (inputArr[i] !== 0 && inputArr[j] !== 0 && inputArr[k] !== 0) {
					if (inputArr[i] + (inputArr[j] + inputArr[k]) == 2020) {
						// console.log(inputArr[i], inputArr[j], inputArr[k]); // 1232 and 99 and 689
						console.log('Part two: ', inputArr[i] * inputArr[j] * inputArr[k]); // 84035952
						return;
					}
				}
			}
		}
	}
})();
