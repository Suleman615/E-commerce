let cartItems = [];

document.addEventListener("DOMContentLoaded", function () {
    const cartList = localStorage.getItem("cart-bz")
    cartItems = JSON.parse(cartList);
    if (!cartItems) {
        localStorage.setItem("cart-bz", JSON.stringify([]));
        cartItems = [];
    }
    document.getElementById('cartnumber').innerText = cartItems.length
    document.getElementById('cartnumber1').innerText = cartItems.length
    updateTotal()


});





// Function to update the cart display
function updateCartDisplay() {
    for (i = 0; i < cartItems.length; i++) {
        const el = `<div class="bg-info bg-opacity-25 my-2 d-flex">
      <img src="${cartItems[i].thumbnail}" class="  w-25 " alt="">
      <div class="ms-2 flex-grow-1">
        <p class="fs-5 fw-bold m-0 p-0">${cartItems[i].title}</p>
        <p class="m-0 p-0">Quantity <span class="mx-2 bg-light px-2 pb-1 rounded btn" onCLick="increase(${i})">+</span>${cartItems[i].quantity}<span class="mx-2 bg-light px-2 pb-1 rounded btn" onCLick="decrease(${i})">-</span></p>
        <p class="p-0 m-0"> Price <span class="fw-bold">${cartItems[i].saleprice * cartItems[i].quantity}</span></p>
      </div>
     <i class="fas fa-xmark fa-lg m-2 btn" onClick="removeItem(${i})"></i>
    </div>`;

        createelement(el, "cart-items");
    }
}

function decrease(index) {
    if (cartItems[index].quantity == 1) { removeItem(index) }
    else {
        cartItems[index].quantity = cartItems[index].quantity - 1

        EmptyCart()
        updateCartDisplay()
        localStorage.setItem("cart-bz", JSON.stringify(cartItems));
    }
    updateTotal()

}


function increase(index) {
    cartItems[index].quantity = cartItems[index].quantity + 1
    updateTotal()
    EmptyCart()
    updateCartDisplay()
    localStorage.setItem("cart-bz", JSON.stringify(cartItems));


}

function removeItem(place) {
    cartItems.splice(place, 1)
    updateTotal()
    EmptyCart()
    updateCartDisplay()
    localStorage.setItem("cart-bz", JSON.stringify(cartItems));
    document.getElementById('cartnumber').innerText = cartItems.length
    document.getElementById('cartnumber1').innerText = cartItems.length
}

function updateTotal() {
    var total = 0;

    for (const obj of cartItems) {
        total += (obj.saleprice * obj.quantity);

    }
    document.getElementById('totalamount').innerText = total

}

function EmptyCart() {
    const parentElement = document.getElementById("cart-items");
    const childElements = parentElement.children;

    for (let i = childElements.length - 1; i >= 0; i--) {
        parentElement.removeChild(childElements[i]);
    }

}




function createelement(src, id) {
    const node = document.createElement("div");
    $(document).ready(function () {
        const element = document.getElementById(id);

        if (element) {
            node.innerHTML = src;
            element.appendChild(node);
        }
    })
}