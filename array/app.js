var products = [];

var elProductsForm = document.querySelector('.products-form');
var elProductsInput = elProductsForm.querySelector('.products-input');
var elAddProductBtn = elProductsForm.querySelector('.add-products');
var elProductsList = document.querySelector('.products-list');

elProductsForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var elProductsInputValue = elProductsInput.value.trim();
	
	if (elProductsInputValue.length < 1) {
		alert(`Biror nima kiriting:)!`);
		return;
	} 

	products.push(elProductsInputValue);

	elProductsList.innerHTML = "";

	for (var product of products) {
		var newProduct = document.createElement('Li');
		newProduct.textContent = product;
		elProductsList.appendChild(newProduct);
	}

	elProductsInput.value = "";
	elProductsInput.focus();
})