const productList = document.querySelector("#productList");
const removeFromList = document.querySelector("#removeFromList");
const productSubmitBtn = document.querySelector("#productSubmit");
let productInput = document.querySelector("#productInput");
const editIcon = document.querySelector("#editIcon");

/* productSubmitBtn.addEventListener("click", () => {
  addProduct();
}); */

// use both click and enter
productInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addProduct();
  }
});

const products = ["melk", "saft", "egg"];

function validateForm() {
  let x = productInput.value;
  const isDuplicate = products.some(function (product) {
    return product === x;
  });

  if (isDuplicate) {
    console.log("duplicate");
    displayList();
  } else {
    console.log("not duplicate");
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
