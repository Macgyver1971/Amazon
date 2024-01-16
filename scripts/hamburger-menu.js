navbarBtn = document.getElementById("js-navbar-button");
navbarDiv = document.getElementById("js-navbar-fixed-div");
transparentDiv = document.getElementById("js-transparent-div")
amazonDivButton = document.querySelector(".amazon-home-text_icon-div")
yourOrdersButton = document.querySelector(".your-orders")

/****||||ADDING FUNCTIONALITY IN HAMBURGER MENU||||****/
navbarBtn.addEventListener("click",()=>{
  navbarDiv.style.cssText = "transform:translateX(0)";
  setTimeout(()=>{
    transparentDiv.style.opacity = 1
  },300)
})
    /****||||ADDING EVENT LISTENER IN CROSS BUTTON||||****/
transparentDiv.addEventListener("click",()=>{
  transparentDiv.style.cssText = "animation:.2s opacity-reduce linear";
  setTimeout(()=>{
    navbarDiv.style.cssText = "animation:.3s slide-left ease-in";
  },200)
})


    /****||||ADDING EVENT LISTENER IN AMAZON TEXT IN HAMBURGER||||****/
amazonDivButton.addEventListener("click",()=>{
  window.location.href = 'entry-page.html'
})

if(yourOrdersButton) {
  yourOrdersButton.addEventListener("click",()=>{
  window.location.href = 'orders.html'
})}