const cartCountCheckoutDiv = document.getElementById("js-cart-count");
      mainDivElem = document.getElementById("js-main-div");
      proceedToCartQuantity = document.getElementById("proceed-to-checkout-cart-quantity");
      totalDollar = document.getElementById("js-total-dollar");
      totalCents = document.getElementById("js-total-cents")
      asideDiv = document.getElementById("js-aside-div")


/****||||DISPLAY CART COUNT||||****/
function displayCartCount(){
  let cartCount = getItemsQuantityInCart();
  (cartCount>=10) && (cartCountCheckoutDiv.style.cssText='transform:translateX(-.30rem); font-size:90%');
  (cartCount<10) && (cartCountCheckoutDiv.style.cssText='transform:translateX(0rem); font-size:100%');
  cartCountCheckoutDiv.innerHTML = cartCount;
  
  if(proceedToCartQuantity){
    proceedToCartQuantity.innerHTML = `(${cartCount} items)`
  }
}
displayCartCount();


/****||||COUNTING TOTAL PRICE OF PRODUCTS IN CART||||****/
function countTotalPrice(){
  let dollarAndCents = getTotalCostOfCart()
  totalDollar.innerHTML = dollarAndCents[0];
  totalCents.innerHTML = dollarAndCents[1];
}
countTotalPrice()



/****||||GENERATE SUBTOTAL DIV IF CART IS EMPTY||||****/
function generateSubtotalDiv(){
  let totalItemsInCart = getItemsQuantityInCart();
  if(!totalItemsInCart){
    asideDiv.innerHTML = `
      <div class="cart-empty-div">
      <div class="empty-cart-image-div">
        <div class="empty-cart-img">
          <img src="https://m.media-amazon.com/images/G/01/cart/empty/animated/rolling-cart-desaturated._CB405694243_.svg">
        </div>
      </div>
      <div class="empty-text-div">
        <div class="amazon-cart-empty">
          Your Amazon Cart is empty
        </div>
        <div class="echo-text">
          Echo... Echo...
        </div>
        <div class="recommend-text" id="js-recommend-button">
          See recommendations
        </div>
      </div>
    </div>
    `
  }
  else{
    
  }
}
generateSubtotalDiv()



/****||||GENERATING HTML OF CHECKOUT PAGE BASED ON CART PRODUCTS||||****/
function generateCartItemsHTML(){
  let checkoutHTML = "";
  let index = 1;
  for(let product of cartItem){
  checkoutHTML+=`
    <div class="cart-product">
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
        <div class="available">
          In Stock
        </div>
        ${(product.specialTag)?`
        <div class="lebel-div">
          ${product.specialTag}
        </div>
        `:""}
        
        ${(product.color)? `
          <div class="cart-product-color">
            <span style="font-weight:bold">Color:</span>&nbsp;${product.color}
          </div>`:""
        }
        ${(product.deliveryCharge)? `
          <div class="cart-product-color">
            <span style="font-weight:bold">Delivery Charge:</span>&nbsp;$${(product.deliveryCharge/100)}
          </div>`:""
        }
        <div class="delete_save-btn">
          <div class="delete-btn" id="js-delete-btn" productIndex="${index}">
            Delete
          </div>
          <div class="save-btn">
            Save for later
          </div>
        </div>
      </div>
    </div>
  `;
  index++
}
mainDivElem.innerHTML = checkoutHTML;
}
generateCartItemsHTML()



/****||||ADDING DELETE FUNCTIONALITY ON CHECKOUT PAGE||||****/
function addingEventListener(){
  const deleteBtn = document.querySelectorAll("#js-delete-btn");
  deleteBtn.forEach((button)=>{
  button.addEventListener("click",()=>{
    productIndex = button.getAttribute("productIndex");
    let newArrOfCart = cartItem.filter((item,index)=>{
      return index!=(productIndex-1)
    })
    localStorage.setItem("myCart",JSON.stringify(newArrOfCart));
    cartItem = JSON.parse(localStorage.getItem("myCart"));
    displayCartCount()
    generateCartItemsHTML()
    addingEventListener()
    saveCartInLocalStorage()
    countTotalPrice()
    generateSubtotalDiv()
  })
})
}
addingEventListener();



/****||||ADDING EVENT LISTENER IN CHECKOUT BUTTON||||****/
loadingButton = document.querySelector(".loading-svg-div");
checkoutMessage = document.querySelector(".added-to-cart-message");
checkoutBtn = document.getElementById("js-checkout-btn");



(checkoutBtn) && (checkoutBtn.addEventListener("click",()=>{
  totalCostOfProducts = getTotalCostOfCart();
  myCheckoutItems = cartItem;
  cartItem = [];
  
  myOrders = JSON.parse(localStorage.getItem("myOrders"))
  myCheckoutItems.forEach((item)=>{
    myOrders.push(item)
  });
  localStorage.setItem("myOrders",JSON.stringify(myOrders));
  
  loadingButton.style.display = "flex";
  setTimeout(()=>{
    checkoutMessage.style.display = "flex"
  },2000)
  setTimeout(()=>{
    loadingButton.style.display = "none";
    checkoutMessage.style.display = "none";
    displayCartCount()
    saveCartInLocalStorage();
    generateCartItemsHTML();
    generateSubtotalDiv();
  },3500)
}))



/****||||ADDING EVENT LISTENER IN RECOMMEND BUTTON||||****/
const recommendationsBtn = document.getElementById("js-recommend-button");
(recommendationsBtn) && (recommendationsBtn.addEventListener("click",()=>{
  window.location.href = 'home.html'
}))



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