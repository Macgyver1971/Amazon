let currentLoggedUser = (localStorage.getItem("currentLoggedUser"))


function runHomePage(){
  /****||||DISPLAY CART PRODUCT AMOUNT||||****/
const mainDiv = document.getElementById("js-main");
      cartCountDiv = document.getElementById("js-cart-counter");
function displayCartCount(){
  let cartCount = getItemsQuantityInCart();
  (cartCount>=10) && (cartCountDiv.style.cssText='transform:translateX(-.30rem); font-size:90%');
  cartCountDiv.innerHTML = cartCount;
}

displayCartCount()
/****||||---------------------------||||****/


/****||||GENERATE HTML OF HOME PAGE||||****/
let productsHTML = "";
function generateProductHTML(selectedColor){
  for(let obj of products){
    productsHTML += `
      <div class="product">
        <!--PRODUCT IMAGE-->  
      <div class="product-image-div">
        <div class="image-container">
          <img src="${obj.productImage}" id="img-change-${obj.productId}">
          
          <!--LENS ICON DIV-->    
          <div class="lens-icon-div">
              <img src="logo/lens-icon.jpg">
          </div>
        </div>
      </div>
        <!--PRODUCT DETAILS-->
      <div class="product-details-container">
        <div class="product-details">
          
          ${(obj.productColor)?`
                   <!--PRODUCT COLOR-->         
          <div class="product-color-selection">
            <div class="product-color-circle product-color-${obj.productColor[0]} product-color-active js-product-color-${obj.productId}" productColor = "${obj.productColor[0]}" productId="${obj.productId}"></div>
            <div class="product-color-circle product-color-${obj.productColor[1]} js-product-color-${obj.productId}" productColor = "${obj.productColor[1]}" productId="${obj.productId}"></div>
            <div class="product-color-circle product-color-${obj.productColor[2]} js-product-color-${obj.productId}" productColor = "${obj.productColor[2]}" productId="${obj.productId}"></div>
          </div>
         <!--PRODUCT COLOR ENDS HERE-->            
          `:""}
         
         
          <div class="product-name">
            ${obj.productName}
          </div>
          
          ${(obj.productSpecialTag)?`
           <div class="product-special-tag">
            ${obj.productSpecialTag}
           </div>
          `:""}
          
          ${(obj.productOptions)?`
            <div class="product-options">
            Options: 
            <span style="color:#007185">
             ${obj.productOptions}
            </span>
            </div>
          `:""}
          
          
          <div class="rating-stats-div">
            <div class="average-rating">
              ${obj.productRating.averageRating}
            </div>
            <div class="star-count">
              <img src="${obj.productRating.starCount}">
            </div>
            <div class="rating-count">
              ${obj.productRating.ratingCount}
            </div>
          </div>
          
          <div class="product-price-div">
            
            <div class="product-price">
              <span class="dollar-sign">
                $
              </span>
              <span class="price-dollar">
                ${obj.productPrice[0]}
              </span>
              <span class="price-cents">
                ${obj.productPrice[1]}
              </span>
            </div>
            
            <div class="listed-price">
              List: <span class="listed-price-strike">
                ${obj.productListedPrice}
                  </span>
            </div>
          </div>
          ${(obj.deliveryDate)? `
            <div class="delivery-date-div">
            <div class="delivery-text">
              Delivery
            </div>
            <div class="delivery-date">
              ${obj.deliveryDate}
            </div>
             </div>
          `:`<div class="delivery-date-div">
          <div class="delivery-text">
              $${obj.deliveryCharge} delivery
            </div>
            </div>`}
          
          
          <div class="shipping-location">
            ${obj.shippingLocation}
          </div>
          
          <div class="add-to-cart 
          js-add-color-${(obj.productColor) &&(obj.productId)}" id="js-add-cart" productId="${obj.productId}" selectedProductColor = ${(obj.productColor) && (obj.productColor[0])}>
          Add to Cart
          </div>
          
        </div>
      </div>
    </div>
    `
  }
}
generateProductHTML();
mainDiv.innerHTML = productsHTML;
/****||||---------------------------||||****/


/****||||ADDING ITEMS ON ADD TO CART||||****/
const addCartBtns = document.querySelectorAll("#js-add-cart");

addCartBtns.forEach((button)=>{
  button.addEventListener("click",()=>{
    if(currentLoggedUser){
      productId = button.getAttribute("productId");
      selectedColor = button.getAttribute("selectedProductColor");
      let object = searchProductWithId(productId);
      addToCart(object,selectedColor);
      displayCartCount()
    }else{
      window.location.href = "login-page.html"
    }
    
  })
})
/****||||---------------------------||||****/


/****||||ADD PRODUCTS WITH DESIRED COLOR||||****/

    /****||||COLOR CHOOSING OPTION||||****/
let colorContainsObjectArr = products.filter((product)=>{
  if(product.productColor){
    return product
  }
});


function colorSelectorDivManager(){
  for(let product of colorContainsObjectArr){
  let colorDivs = document.querySelectorAll(`.js-product-color-${product.productId}`);
  let containsClassDiv;
  for(let colorDiv of colorDivs){
    if(colorDiv.classList.contains("product-color-active")){
      containsClassDiv = colorDiv;
    }
  };
  colorDivs.forEach((indiDiv)=>{
    indiDiv.onclick = function handleClick(){
      containsClassDiv.classList.remove("product-color-active");
      indiDiv.classList.add("product-color-active");
      selectedColor = indiDiv.getAttribute("productColor");
      colorDivId = indiDiv.getAttribute("productId");
      changeAddToCartAttribute(selectedColor,colorDivId)
      changeImageDiv(colorDivId,selectedColor)
      colorSelectorDivManager()
    }
  })
}
};

    /****||||ADDING ATTRIBUTE IN ADD TO CART BUTTON||||****/
function changeAddToCartAttribute(selectedColor,colorDivId){
  colorAddCart = `js-add-color-${colorDivId}`
  document.querySelector(`.${colorAddCart}`).setAttribute("selectedProductColor",`${selectedColor}`)
}
    /****||||CHANGE THE IMAGE ACCORDING TO COLOR||||****/
function changeImageDiv(imageDivId,selectedColor){
  mainObj = searchProductWithId(imageDivId);
  imgSrc = mainObj.cartImage;
  document.getElementById(`img-change-${imageDivId}`).src = `${imgSrc}-${selectedColor}.webp`
}

colorSelectorDivManager()



}
/****||||REMOVING FOCUS FROM SEARCH BAR ON SCROLL||||****/
window.addEventListener("scroll",()=>{
  document.querySelector(".search-input_icon input").blur()
})

runHomePage()


/****||||SEARCHING FROM OTHER PAGES||||****/
document.querySelector(".search-input_icon input").value = JSON.parse(localStorage.getItem("mySearch"));
filterProductsForSearch()
localStorage.removeItem("mySearch");


