document.querySelector(".search-input_icon").addEventListener("click",()=>{
  window.location.href = "home.html"
})

document.querySelector(".catagory-showcase-div").addEventListener("click",()=>{
  window.location.href = "home.html"
})

document.querySelector(".design-tools-gif").addEventListener("click",()=>{
  window.location.href = "home.html"
})

document.querySelector(".slide-choices-list").addEventListener("click",()=>{
  window.location.href = "home.html"
})

cartCountDiv= document.getElementById("js-cart-counter")

function showCartCount(){
  cartCount = getItemsQuantityInCart();
  (cartCount>=10) && (cartCountDiv.style.cssText='transform:translateX(-.30rem); font-size:90%');
  cartCountDiv.innerHTML = cartCount;
}

showCartCount()