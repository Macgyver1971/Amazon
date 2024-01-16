let orderItem = JSON.parse(localStorage.getItem("myOrders"))

/****||||DISPLAYING CART COUNT||||****/
cartCountDiv = document.getElementById("js-cart-counter");

function displayCartCount(){
  let cartCount = getItemsQuantityInCart();
  (cartCount>=10) && (cartCountDiv.style.cssText='transform:translateX(-.30rem); font-size:90%');
  cartCountDiv.innerHTML = cartCount;
}

displayCartCount()

/****||||COUNTING PRODUCTS IN ORDER||||****/
function countOrderProducts(){
  orderQuantity = 0
  orderItem.forEach((item)=>{
    orderQuantity += item.quantity
  })
  return orderQuantity
}



/****||||GENERATING HTML IF ORDER HAS ITEM||||****/
function generateOrderItemsHTML(){
  let checkoutHTML = `
    <div class="your-orders-div-available">
      Your Orders
      <div class="clear-all-orders">
      Clear All Orders
      </div>
    </div>
  `;
  let index = 1;
  for(let product of orderItem){
  checkoutHTML+=`
    <div class="order-product">
      <div class="product-image-div">
          <img src="${product.image}">
      </div>
      
      <div class="product-details-div">
        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-price">
          <div class="dollar-sign">
            $
          </div>
          <div class="price-dollar">
            ${product.price[0]}
          </div>
          <div class="price-cents">
            ${product.price[1]}
          </div>
          <div class="multiply-sign_quantity">
            ×${product.quantity}
          </div>
        </div>
        ${(product.specialTag)?`
        <div class="lebel-div">
          ${product.specialTag}
        </div>
        `:""}
        
        ${(product.color)? `
          <div class="order-product-color">
            <span style="font-weight:bold">Color:</span>&nbsp;${product.color}
          </div>`:""
        }
        ${(product.deliveryCharge)? `
          <div class="order-product-color">
            <span style="font-weight:bold">Delivery Charge:</span>&nbsp;$${product.deliveryCharge/100}
          </div>`:""
        }
        <div class="delivery-order-date-div">
          <div class="delivery-order-text">
            Arriving on:&nbsp; 
          </div>
          <div class="delivery-date">
          ${product.deliveryDate}
          </div>
        </div>
      </div>
    </div>
  `;
  index++
}
document.querySelector(".my-orders-available").innerHTML = checkoutHTML
}

if(countOrderProducts()!==0){
  generateOrderItemsHTML()
}
  /****||||ADDING EVENG LISTENER TO CLEAR ORDER BUTTON||||****/
  const clearOrderBtn = document.querySelector(".clear-all-orders");


  (clearOrderBtn) && (clearOrderBtn.addEventListener("click",()=>{
    orderItem = [];
    localStorage.setItem("myOrders",JSON.stringify(orderItem));
    document.querySelector(".my-orders-available").innerHTML = "";
    emptyOrderPageGen()
  }))


/****||||GENERATING HTML IF ORDER HAS NO ITEM||||****/
const emptyOrderDiv = document.querySelector(".orders-main")
function emptyOrderPageGen(){
  if(countOrderProducts()==0){
    emptyOrderDiv.innerHTML = `
      <div class="your-orders-div">
      Your Orders
    </div>
    <div class="order-icon_text">
      <div class="whitesmoke-background-div">
        <div class="empty-box-image-div">
          <img src="logo/empty-box.png">
        </div>
      </div>
      <div class="your-orders-details-div">
        <div class="your-orders-text-green">
          Your orders
        </div>
        <div class="detailed-reason-div">
          Looks like you haven't placed an order in the last 3 months.
        </div>
        <div class="continue-shopping-button-div">
          <div class="hr-text">
          </div>
          <div class="continue-shopping-button">
            <div class="continue-shopping-button-text">
              Continue Shopping
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
emptyOrderPageGen()



/****||||ADDING EVENT LISTENER IN SEARCH BUTTON||||****/
document.querySelector(".search-icon-box").addEventListener("click",()=>{
  let myInput = JSON.stringify(document.querySelector(".search-input_icon input").value)
  localStorage.setItem("mySearch",myInput)
  window.location.href = "home.html"
})

/****||||REMOVING FOCUS FROM SEARCH BAR ON SCROLL||||****/
window.addEventListener("scroll",()=>{
  document.querySelector(".search-input_icon input").blur()
})