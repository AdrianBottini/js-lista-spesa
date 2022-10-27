const arrGroceryList = [];
let item
do {
	item = prompt('inserisci qualcosa da comprre');
	arrGroceryList.push(item);
} while (item != ''  && arrGroceryList.length < 10)
if (!arrGroceryList[arrGroceryList.length - 1]) {
	arrGroceryList.pop();
}

const eleGroceryList = document.querySelector('.grocery-list');
const inputGroceryItem = document.querySelector('#input-grocery');
const eleGroceryForm = document.querySelector('form');

eleGroceryForm.addEventListener('submit', function(event) {
	event.preventDefault();

	if (inputGroceryItem.value) {
		arrGroceryList.push(inputGroceryItem.value);

		eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;

		inputGroceryItem.value = '';
	}
});

let i = 0;
while (i < arrGroceryList.length) {
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;
}
