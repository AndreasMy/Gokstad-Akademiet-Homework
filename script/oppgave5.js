const productList = document.querySelector("#productList");
const removeFromList = document.querySelector("#removeFromList");
const productSubmitBtn = document.querySelector("#productSubmit");
let productInput = document.querySelector("#productInput");
const editIcon = document.querySelector("#editIcon");
const warningTextConstainer = document.querySelector("#warningTextContainer");

const products = ["melk", "saft", "egg"];

// use both click and enter
productInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    validateForm();
  }
});

// find() and some() will have the same syntax, but .find() satets the intention better
// find() states that I'm looking for a particular array item
// some() states that I'm looking for items that fits my needs or not
// keeping the if statements inside the above function scope will reiterate the result
// adding empty strings to the list

function validateForm() {
  let x = productInput.value;
  const isDuplicate = products.find(function (product) {
    return product === x;
  });

  // use display: block; to reserve space for the warning text
  const warningContent = document.createElement("div");
  warningContent.classList.add("warningContent");
  warningContent.textContent = `${isDuplicate} has already been added to the list`;

  if (isDuplicate) {
    warningTextConstainer.appendChild(warningContent);
    displayList();
  } else {
    addProduct();
    displayList();
  }
}

console.log(products);

function addProduct() {
  products.push(productInput.value);
  displayList();
}

function removeProduct(i) {
  products.splice(i, 1);
  displayList();
}

function editProduct(i) {
  const changedProduct = prompt("Edit Product", "sukker");
  products.splice(i, 1, changedProduct);
  displayList();
}

function displayList() {
  productList.innerHTML = "";
  productInput.value = "";

  for (let i = 0; i < products.length; i++) {
    productList.innerHTML += `<li class="list-item">${products[i]}<div onclick="removeProduct(${i})" class="rmv-line"></div><img src="../icons/edit-246.svg" id="editIcon" onclick="editProduct(${i})"></img></li>`;
  }
}

displayList();
