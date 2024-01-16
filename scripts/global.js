amazonLogoDiv = document.querySelector(".amazon-logo")
cartIconDiv = document.querySelector(".cart-icon")
someoneUsing = localStorage.getItem("currentLoggedUser");



amazonLogoDiv.addEventListener("click",()=>{
  window.location.href = '../entry-page.html'
})


if(someoneUsing){
  cartIconDiv.addEventListener("click",()=>{
  window.location.href = '../checkout.html'
})
}else{
  cartIconDiv.addEventListener("click",()=>{
  window.location.href = '../login-page.html'
})
}



/****||||Getting logged user data||||****/
let userNameDiv = document.querySelector(".user-name");
let tempName;
(localStorage.getItem("currentLoggedUser")) && ( tempName = localStorage.getItem("currentLoggedUser").split(' ')[0])


if(tempName){
  let loggedUser = tempName + " ›"
  userNameDiv.innerHTML = loggedUser
}
else{
  userNameDiv.innerHTML = "Login ›"
}


document.querySelector(".user-name_icon").addEventListener("click",()=>{
  window.location.href = "login-page.html"
})