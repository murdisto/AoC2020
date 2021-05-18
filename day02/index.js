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

	// split the range convert them to numbers and assign each to variables
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

///////////////////////////////////////////////

const validPasswordsTwo = inputItems.filter(item => {
	// split an array item into two parts along the :,
	// assigning the first part to the variable 'policy' and the second to the variable 'password' using DESTRUCTURING ASSIGNMENT
	//then trim the password
	let [policy, password] = item.split(':');
	password = password.trim();

	// split the policy into two parts along the space between the two positions and the letter to be checked,
	// then assign them to the variables 'positionPair' and 'letter'
	const [positionPair, letter] = policy.split(' ');

	// split the positions, convert them to Number type, and assign each to variables
	const [positionOne, positionTwo] = positionPair.split('-').map(Number);

	// assign the letters at position one and position two in the password (non-zero indexed) to variables
	const letterAtPosOne = password[positionOne - 1];
	const letterAtPosTwo = password[positionTwo - 1];

	// check if password is valid based on if letter is at positionOne and not at positionTwo
	if (letterAtPosOne !== letter && letterAtPosTwo !== letter) {
		return false;
	} else if (letterAtPosOne === letter && letterAtPosTwo === letter) {
		return false;
	} else {
		return true;
	}
});
// log the length of the new array
console.log('Part two answer: ', validPasswordsTwo.length); //
