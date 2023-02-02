const productList = document.querySelector("#productList");
const removeFromList = document.querySelector("#removeFromList");
const productSubmitBtn = document.querySelector("#productSubmit");
const productRemoveBtn = document.querySelector("#productRemove");
let productInput = document.querySelector("#productInput");
const editIcon = document.querySelector("#editIcon");
/* 
productSubmitBtn.disabled = true;

productInput.addEventListener("keyup", stateHandle);

function stateHandle() {
  if (document.querySelector("#productInput").value === "") {
    document.querySelector("#productSubmit").disabled = true;
  } else {
    document.querySelector("#productSubmit").disabled = false;
  }
} 
 */
productSubmitBtn.addEventListener("click", () => {
  addProduct();
});

productRemoveBtn.addEventListener("click", removeProduct);
// use both click and enter
productInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addProduct();
  }
});

const products = ["melk", "saft", "egg"];

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
  productInput.value = "";
  productList.innerHTML = "";

  //? use either map or for each to add new items
  for (let i = 0; i < products.length; i++) {
    productList.innerHTML += `<li class="list-item">${products[i]}<div onclick="removeProduct(${i})" class="rmv-line"></div><img src="../icons/edit-246.svg" id="editIcon" onclick="editProduct(${i})"></img></li>`;
  }
}

displayList();
