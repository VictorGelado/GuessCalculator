const preferentialOperationBoolean = document.querySelector('#operation-radio');
const preferentialOperation = document.querySelector('#preferential-operation');
const generateOperationButton = document.querySelector('#generate-operation');
const operationLbl = document.querySelector('#operation');
const numberGuess = document.querySelector('#guess-number');
const buttonGuess = document.querySelector('#guess');
const buttonReset = document.querySelector('#reset');


let operations = ['+', '-', '*', '/'];

preferentialOperationBoolean.addEventListener('change', () => {
	if (preferentialOperationBoolean.checked) {
		preferentialOperation.style.display = 'unset';
	}
});

generateOperationButton.addEventListener('click', generateOperation(), false);

buttonReset.addEventListener('click', () => {
	operations = ['+', '-', '*', '/']

	preferentialOperation.style.display = 'none';
});

function generateOperation() {

	let operation = preferentialOperation.value != "none"? preferentialOperation.value: operations[generateRandomValue(4)];

	let number1 = generateRandomValue(11); 

	let number2 = generateRandomValue(11);

	let operationText = `${number1} ${operation} ${number2} = ?`;
	
	operationLbl.textContent = operationText;

	console.log(operation)
	
}

function generateRandomValue(max) {
	return Math.floor(Math.random() * max);
}