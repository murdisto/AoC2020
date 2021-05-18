const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

// Split each line of input into array items
const inputItems = input.split('\n');

// filter each item that returns true into a new array called validPasswordsOne
const validPasswordsOne = inputItems.filter(item => {
	// split an array item into two parts along the :,
	// assigning the first part to the variable 'policy' and the second to the variable 'password' using DESTRUCTURING ASSIGNMENT
	//then trim the password
	let [policy, password] = item.split(':');
	password = password.trim();

	// split the policy into two parts along the space between the range and the letter to be checked,
	// then assign them to the variables 'range' and 'letter'
	const [range, letter] = policy.split(' ');

	// split the range and assign each to variables
	const [lowEndRange, highEndRange] = range.split('-').map(Number);

	// initialize a variable to hold the count of occurances of the letter in the password
	let count = 0;

	// iterate through a password comparing each character to the letter in the policy and increment the variable
	// 'count' for each occurance
	for (let i = 0; i < password.length; i++) {
		if (password[i] === letter) {
			count++;
		}
	}

	// check if count is inside of the range provided in the policy and return the boolean value
	return count >= lowEndRange && count <= highEndRange;
});
// log the length of the new array
console.log('Part one answer: ', validPasswordsOne.length); // 410
