let cartItems = [];

document.addEventListener("DOMContentLoaded", function () {
  const cartList = localStorage.getItem("cart-bz")
  cartItems = JSON.parse(cartList);
  document.getElementById('cartnumber').innerText = cartItems.length
  document.getElementById('cartnumber1').innerText = cartItems.length
  updateTotal()
  search(link);

});

var link =
  "https://dummyjson.com/products?limit=10&skip=75&select=title,price,brand,thumbnail,rating";

function search(SRC) {
  $.ajax({
    url: SRC,
    method: "GET",
    datatype: "json",
    success: function (data) {
      for (let i = 0; i < 5; i++) {
        for (i = 0; i < 5; i++) {
          const el = `<div class="m-2 bg-light h-auto  " style=" width: 235px;">
          <div class="bg-image   w-100 p-2 pt-3"
              style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
              <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
          </div>
           
           <div class="d-flex flex-column justify-content-center align-items-center ">
             <span class=" rounded-circle bg-info text-center lh-1 pt-2 fw-bold" style="margin-top: -25px; height: 50px ; width: 50px;">25% OFF </span>
             <p class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</p>
             <p class="text-center  fs-5 m-0 fst-italic">${data.products[i].brand}</p>
             <p class="text-center fs-6 m-0 fw-bold">$ <span class="fw-normal   text-decoration-line-through">${data.products[i].price}</span> ${(data.products[i].price - (data.products[i].price * .25))}</p>
             <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
           </div>
       </div>`;

          createelement(el, "cardsFirstRow");
        }

        for (i = 5; i < 10; i++) {
          const ele = `<div class="m-2 bg-light h-auto  " style=" width: 235px;">
          <div class="bg-image   w-100 p-2 pt-3"
              style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
              <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
          </div>
           
           <div class="d-flex flex-column justify-content-center align-items-center ">
             <span class=" rounded-circle bg-info text-center lh-1 pt-2 fw-bold" style="margin-top: -25px; height: 50px ; width: 50px;">30% OFF </span>
             <p class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</p>
             <p class="text-center  fs-5 m-0 fst-italic">${data.products[i].brand}</p>
             <p class="text-center fs-6 m-0 fw-bold">$ <span class="fw-normal   text-decoration-line-through">${data.products[i].price}</span> ${(data.products[i].price - (data.products[i].price * .25))}</p>
             <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
           </div>
       </div>`;

          createelement(ele, "cardsSecondRow");
        }
      }
    },
    error: function (error) {
      console.log("error is = " + error);
    },
  });
}

// Cart data to store added items

// Function to add an item to the cart
function addToCart(productId) {
  productId -= 76;
  $.ajax({
    url: link,
    method: "GET",
    datatype: "json",
    success: function (data) {
      const product = data.products[productId];


      if (0 <= productId && productId < 5) {
        product.saleprice = product.price - (product.price * 0.25)
      } else { product.saleprice = product.price - (product.price * 0.30) }


      // Check if the product is already in the cart
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it to the cart with a quantity of 1
        cartItems.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart-bz", JSON.stringify(cartItems));
      document.getElementById('cartnumber').innerText = cartItems.length
      document.getElementById('cartnumber1').innerText = cartItems.length
      updateTotal()


    },
    error: function (error) {
      console.log("error is = " + error);
    },
  });



}

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
    console.log("total is " + total)

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

// Add event listeners for the "Add to Cart" buttons

function AddCartAction() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button, i) => {
    button.addEventListener("click", function () {
      const productId = addToCartButtons[i].getAttribute("data-product-id");
      addToCart(productId);
    });
  });
}

function createelement(src, id) {
  const node = document.createElement("div");
  $(document).ready(function () {
    const element = document.getElementById(id);

    if (element) {
      node.innerHTML = src;
      element.appendChild(node);
    }
  });
}

setTimeout(() => {
  AddCartAction();
}, 5000);
