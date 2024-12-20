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


    search(menWatches, women, menGlasses, kitchen, sport, mobile, fragrances)
});


var menWatches = 'https://dummyjson.com/products?limit=5&skip=92&select=title,price,thumbnail,rating,brand'
var women = 'https://dummyjson.com/products?limit=23&skip=171&select=title,price,thumbnail,rating,brand'
var menGlasses = 'https://dummyjson.com/products?limit=5&skip=153&select=title,price,thumbnail,rating,brand'
var kitchen = 'https://dummyjson.com/products?limit=30&skip=47&select=title,price,thumbnail,rating,brand'
var sport = 'https://dummyjson.com/products?limit=17&skip=136&select=title,price,thumbnail,rating,brand'
var mobile = 'https://dummyjson.com/products?limit=14&skip=98&select=title,price,thumbnail,rating,brand'
var fragrances = 'https://dummyjson.com/products?limit=5&skip=5&select=title,thumbnail,rating,brand'

function search(menW, womwnW, menG, kitchenA, sportA, mobileA, frag) {


    // Men Watches 
    $.ajax({

        url: menW,
        method: 'GET',
        datatype: 'json',
        success: function (data) {
            for (i = 0; i < 5; i++) {

                const el = `<div class="m-3 bg-light h-auto  rounded border " style=" width: 235px;">
                        <div class="bg-image rounded-top   w-100 p-2 pt-3"
                        style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                        <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                        </div>
                                
                              <div class="d-flex flex-column justify-content-center align-items-center ">
                                <a class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                                <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                                <p class="text-center fs-6 m-0 fw-bold">$${data.products[i].price}</p>
                                <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                              </div>
                            </div>
                      
                            `;

                createelement(el, "menwatches");

            }
        }
    })

    // Kitche Accessories
    $.ajax({

        url: kitchenA,
        method: 'GET',
        datatype: 'json',
        success: function (data) {
            for (i = 0; i < 30; i++) {

                const el = `<div class="m-3 bg-light h-auto  rounded border " style=" width: 235px;">
                        <div class="bg-image rounded-top   w-100 p-2 pt-3"
                        style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                        <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                        </div>
                                
                              <div class="d-flex flex-column justify-content-center align-items-center ">
                                <a class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                                <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                                <p class="text-center fs-6 m-0 fw-bold">$${data.products[i].price}</p>
                                <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                              </div>
                            </div>
                      
                            `;

                createelement(el, "kitchen");

            }
        }
    })


    // Sports Accessories
    $.ajax({

        url: sportA,
        method: 'GET',
        datatype: 'json',
        success: function (data) {
            for (i = 0; i < 17; i++) {

                const el = `<div class="m-3 bg-light h-auto  rounded border " style=" width: 235px;">
                        <div class="bg-image rounded-top   w-100 p-2 pt-3"
                        style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                        <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                        </div>
                                
                              <div class="d-flex flex-column justify-content-center align-items-center ">
                                <a class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                                <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                                <p class="text-center fs-6 m-0 fw-bold">$${data.products[i].price}</p>
                                <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                              </div>
                            </div>
                      
                            `;

                createelement(el, "sports");

            }
        }
    })


    // mobile Accessories
    $.ajax({

        url: mobileA,
        method: 'GET',
        datatype: 'json',
        success: function (data) {
            for (i = 0; i < 14; i++) {

                const el = `<div class="m-3 bg-light h-auto  rounded border " style=" width: 235px;">
                        <div class="bg-image rounded-top   w-100 p-2 pt-3"
                        style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                        <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                        </div>
                                
                              <div class="d-flex flex-column justify-content-center align-items-center ">
                                <a class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                                <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                                <p class="text-center fs-6 m-0 fw-bold">$${data.products[i].price}</p>
                                <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                              </div>
                            </div>
                      
                            `;

                createelement(el, "mobile");

            }
        }
    })

    // women  
    $.ajax({

        url: womwnW,
        method: 'GET',
        datatype: 'json',
        success: function (data) {

            // Women bags 
            for (i = 0; i < 5; i++) {


                const ele = `<div class="m-3 bg-light h-auto border rounded " style=" width:235px ;">
                        <div class="bg-image rounded-top  w-100 p-2 pt-3"
                        style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                        <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center  ">

                          <a class="btn p-0 m-0 fs-5 fw-bold  " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                          <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                          <p class="text-center fs-6 fw-bold m-0">$ ${data.products[i].price}</p>
                          <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                          </div>
                      </div>
              
                    `;

                createelement(ele, "womenbags");

            }


            // women-dresses 
            for (i = 5; i < 10; i++) {


                const ele = `<div class="m-3 bg-light h-auto border rounded " style=" width:235px ;">
                        <div class="bg-image rounded-top  w-100 p-2 pt-3"
                        style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                        <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center  ">

                          <a class="btn p-0 m-0 fs-5 fw-bold  " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                          <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                          <p class="text-center fs-6 fw-bold m-0">$ ${data.products[i].price}</p>
                          <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                          </div>
                      </div>
              
                    `;

                createelement(ele, "womenDresses");

            }


            // women watches 
            for (i = 19; i < 23; i++) {

                const el = `<div class="m-3 bg-light h-auto  rounded border " style=" width: 235px;">
                    <div class="bg-image rounded-top   w-100 p-2 pt-3"
                    style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                    <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                    </div>

                          <div class="d-flex flex-column justify-content-center align-items-center ">
                            <a class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                            <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                            <p class="text-center fs-6 m-0 fw-bold">$${data.products[i].price}</p>
                            <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                          </div>
                        </div>

                        `;

                createelement(el, "womenwatches");

            }


            // women shoes 
            for (i = 13; i < 18; i++) {

                const el = `<div class="m-3 bg-light h-auto  rounded border " style=" width: 235px;">
                    <div class="bg-image rounded-top   w-100 p-2 pt-3"
                    style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                    <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                    </div>

                          <div class="d-flex flex-column justify-content-center align-items-center ">
                            <a class="btn p-0 m-0 fs-5 fw-bold text-center " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                            <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                            <p class="text-center fs-6 m-0 fw-bold">$${data.products[i].price}</p>
                            <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                          </div>
                        </div>

                        `;

                createelement(el, "womenShoes");

            }
        }


    })




    $.ajax({


        url: menG,
        method: 'GET',
        datatype: 'json',
        success: function (data) {
            // men sunglasses
            for (i = 0; i < 5; i++) {


                const ele = `<div class="m-3 bg-light h-auto border rounded  " style=" width:235px ;">
                        <div class="bg-image rounded-top  w-100 p-2 pt-3"
                        style="height: 250px; background-image:url('${data.products[i].thumbnail}')"> 
                        <a class="bg-info bg-opacity-50 btn py-1 m-0 px-2 rounded-pill  add-to-cart"    data-product-id='${data.products[i].id}'> <i class="fas fa-cart-flatbed"></i></a>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center  ">
                        <span class=" rounded-circle bg-info text-center lh-1 pt-2 fw-bold" style="margin-top: -25px; height: 50px ; width: 50px;">30% OFF </span>
                          <a class="btn p-0 m-0 fs-5 fw-bold  " href="" style="width:220px; min-height:62px">${data.products[i].title}</a>
                          <p class="text-center  fs-5 m-0 fst-italic">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                          <p class="text-center fs-6 m-0 fw-bold">$ <span class="fw-normal   text-decoration-line-through">${data.products[i].price}</span> ${(data.products[i].price - (data.products[i].price * .30))}</p>
                          <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
                          </div>
                      </div>
              
                    `;

                createelement(ele, "sunglasses");

            }



        },
        error: function (error) {
            console.log("error is = " + error)
        }

    })


    // NEW ARRIVALS
    $.ajax({
        url: frag,
        method: 'GET',
        datatype: 'json',
        success: function (data) {

            for (i = 0; i < 5; i++) {


                const el = `<div class="my-4 ms-2  d-flex w-100" style="height: 140px ;">
                    <img class="bg-image w-25 h-100 " src="${data.products[i].thumbnail}" alt="">
                    <span class="ms-2 py-1 ">
                      <p class="fw-bold m-0 fs-5  text-wrap">${data.products[i].title}</p>
                      <p class="fs-6 m-0 ">${(data.products[i].brand) ? data.products[i].brand : ""}</p>
                      <span class="fw-bold"><i class="fas m-0 px-2 fa-star" style="color: rgb(248, 252, 52)"></i>${data.products[i].rating}</span>
        
                    </span>
                  </div>
                  
                        `;

                createelement(el, "newarrivals");
            }
        },


        error: function (error) {
            console.log("error is = " + error)
        }

    })



}









function addToCart(productId) {
    productId -= 61;

    $.ajax({
        url: link,
        method: "GET",
        datatype: "json",
        success: function (data) {
            const product = data.products[productId];

            if (15 <= productId && productId < 20) {
                product.saleprice = product.price - (product.price * 0.25)
            } else if (20 <= productId && productId < 25) {
                product.saleprice = product.price - (product.price * 0.30)
            } else { product.saleprice = product.price }

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
    })
}

setTimeout(() => {
    AddCartAction();
}, 5000);



