let userData = JSON.parse(localStorage.getItem("userData")) || [];
let currentLoggedUser = localStorage.getItem("currentLoggedUser");
let signUpNameElem = document.getElementById("sign-up-name");
let signUpEmailElem = document.getElementById("sign-up-email");
let signUpPassElem = document.getElementById("sign-up-password");


/****||||GENERATE SIGN IN CONTAINER||||****/
function signInContainerGen(){
  const formDiv = document.querySelector(".new-acc_sign-in");
  let messageDivElem = document.querySelector(".account-creation-successful-message");
  
  
        formDiv.innerHTML = `
            <div class="create-new-account-div">
      <div class="create-new-account-text">
        <input type="radio" checked name="option" id="radio-input" value="sign-in">
        Sign in.
        <span style="font-size:80%; ">
           Welcome back
        </span> 
        
      </div>
      <div class="input-boxes-sign-up">
        <form>
          <input class="sign" type="email" id="sign-in-email" name="sign-up-email" placeholder="Enter your email..." required>
          <input class="sign" id="sign-in-password" name="sign-up-password" placeholder="Enter your password..." required>
          
          <div class="show-password-checkbox-div">
            <input type="checkbox" name="show-password" id="show-password-checkbox">
            Show password
          </div>
          
          <button id="continue-button-sign-in">
            Sign in
          </button>
        </form>
        </div>
        <div class="create-new-account-text">
        <input type="radio" name="option" id="radio-input" value="create-account">
        Create account.
        <span style="font-size:80%; ">
           New to Amazon?
        </span> 
        
      </div>
    </div>
          
          
          `
          addSignInAndSignUpEventListener()
          generateEventListener();
}


/****||||GENERATE SIGN UP CONTAINER||||****/
function signUpContainerGen(){
  const formDiv = document.querySelector(".new-acc_sign-in");
  
        formDiv.innerHTML = `
          
            <div class="create-new-account-div">
      <div class="create-new-account-text">
        <input checked type="radio" name="option" id="radio-input" value="create-account">
        Create account.
        <span style="font-size:80%; ">
           New to Amazon?
        </span> 
        
      </div>
      <div class="input-boxes-sign-up">
        <form>
          <input class="sign" id="sign-up-name" name="sign-up-name" placeholder="First name and last name..." required>
          <input class="sign" type="email" id="sign-up-email" name="sign-up-email" placeholder="Mobile number or email..." required>
          <input class="sign" id="sign-up-password" name="sign-up-password" placeholder="Create a password..." required>
          
          <div class="show-password-checkbox-div">
            <input type="checkbox" name="show-password" id="show-password-checkbox">
            Show password
          </div>
          
          <button id="continue-button-sign-up">
            Continue
          </button>
          <div class="aggrement-text">
            By creating an account, you agree to Amazon's 
            <span style="color:#4588ff">
              Conditions of Use
            </span> and 
            <span style="color:#4588ff">
              Privacy Notice.
            </span>
          </div>
        </form>
        </div>
              <div class="create-new-account-text">
        <input type="radio" name="option" id="radio-input" value="sign-in">
        Sign in.
        <span style="font-size:80%; ">
           Welcome back
        </span> 
        
      </div>
    </div>
          
          
          `
          addSignInAndSignUpEventListener()
          generateEventListener()
}


/****||||FUNCTION RUNS WHEN USER CLICKS SIGN UP OR CREATE ACCOUNT BUTTON||||****/
function signUpUser(){
  let username = document.getElementById("sign-up-name").value;
  let useremail = document.getElementById("sign-up-email").value;
  let userpassword = document.getElementById("sign-up-password").value;
  
  if(username !== "" &&
     useremail !== "" && 
     userpassword !== ""){
       
    let accountExists = false;
    let messageDivElem = document.querySelector(".account-creation-successful-message");
    
    
    for(let data of userData){
      if(data.useremail == useremail){
        accountExists = true;
      }
    }
    
    if(!accountExists){
      console.log("creating")
      userData.push({
        username: username,
        useremail: useremail,
        userpassword: userpassword
      })
      localStorage.setItem("userData",JSON.stringify(userData));
      messageDivElem.innerHTML = "Your account creation is successful";
      messageDivElem.style.display = "flex";
      setTimeout(()=>{
        signInContainerGen()
        messageDivElem.style.display = "none";
      },2000)
    }else if(accountExists){
      console.log("exist")
      messageDivElem.innerHTML = "Account Already Exists";
      messageDivElem.style.display = "flex";
      setTimeout(()=>{
        signInContainerGen()
        addSignInAndSignUpEventListener()
        messageDivElem.style.display = "none";
      },2000)
    }
  }
}

/****||||FUNCTION RUNS WHEN USER CLICKS SIGN IN BUTTON||||****/
function signInUser(){
  let useremail = document.getElementById("sign-in-email").value;
  let userpassword = document.getElementById("sign-in-password").value;
  let messageDivElem = document.querySelector(".account-creation-successful-message");
  let accountMatch = false;
  
  
  for(let data of userData){
    if(data.useremail == useremail){
      if(data.userpassword == userpassword){
        messageDivElem.innerHTML = "Login successful";
        messageDivElem.style.display = "flex";
        
        currentLoggedUser = data.username;
        localStorage.setItem("currentLoggedUser",currentLoggedUser)
        console.log(currentLoggedUser)
        
        
        accountMatch = true
        setTimeout(()=>{
          messageDivElem.style.display = "none";
          window.location.href = "entry-page.html";
        },2000)
        break;
      }else{
        messageDivElem.innerHTML = "Wrong password";
        messageDivElem.style.display = "flex"
        accountMatch = true
        setTimeout(()=>{
          messageDivElem.style.display = "none";
        },2000)
      }
    }
  }
  if(!accountMatch){
    messageDivElem.innerHTML = "No user found";
    messageDivElem.style.display = "flex"
        
    setTimeout(()=>{
          messageDivElem.style.display = "none";
        },2000)
  }
}



/****||||ADD EVENT LISTENER TO SIGN IN AND SIGN UP BUTTON||||****/
function addSignInAndSignUpEventListener(){
  let signUpBtn = document.getElementById("continue-button-sign-up");
  (signUpBtn)&&(signUpBtn.addEventListener("click",()=>{
  signUpUser()}))
  
  
  let signInBtn = document.getElementById("continue-button-sign-in");
  (signInBtn) && (signInBtn.addEventListener("click",()=>{
  signInUser()}))
}
addSignInAndSignUpEventListener()

/****||||RESTRICT FORM AUTO SUBMISSION||||****/
function formAutoSubmission(){
  document.querySelectorAll("form").forEach((elem)=>{
    
    elem.addEventListener("submit",(event)=>{
    event.preventDefault()
    })
    
  })
}

formAutoSubmission()




function generateEventListener(){
  formAutoSubmission();
  
  const formDiv = document.querySelector(".new-acc_sign-in");
  let formType = document.querySelectorAll("#radio-input");
  
  formType.forEach((inputDiv)=>{
    inputDiv.onclick = ()=>{
      
      if(inputDiv.checked){
        if(inputDiv.value == "create-account"){
          signUpContainerGen()
        }else{
          signInContainerGen()
        }
     }
      
    }
})
}
generateEventListener()
/***/


/****||||ADDING EVENT LISTENER IN AMAZON LOGO||||****/
document.querySelector(".amazon-logo").addEventListener("click",()=>{
  window.location.href = "entry-page.html"
});



/****||||CHANGING LOGIN PAGE IF USER IS LOGGRD IN||||****/
if(currentLoggedUser){
  document.querySelector(".logged-user-name").innerHTML = currentLoggedUser
  document.querySelector(".logout-section").style.display = "grid";
  
  document.querySelector(".log-out-button").addEventListener("click",()=>{
    localStorage.removeItem("currentLoggedUser");
    document.querySelector(".logout-section").style.display = "none";
    
    currentCart = JSON.parse(localStorage.getItem("myCart"))
    if(currentCart){
      localStorage.removeItem("myCart");
      console.log(currentCart)
      saveCartItemInUserData(currentCart)
    }
  })
  
}
else{
  document.querySelector(".logout-section").style.display = "none"
}
