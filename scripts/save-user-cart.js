let userDataInSaving = JSON.parse(localStorage.getItem("userData"));
let currentUserName = localStorage.getItem("currentLoggedUser")

function getUserDataObj(){
  if(userDataInSaving && currentUserName){
  let index = 0;
  for(let data of userDataInSaving){
    if(data.username == currentUserName){
      break
    }else{
      index++
    }
  }
  let userAllData = [userDataInSaving[index],index]
  return userAllData
}
}

function saveCartItemInUserData(currentCart){
  currentUserObj = getUserDataObj()[0];
  currentUserObj.usercart = currentCart;
  userDataInSaving.splice(getUserDataObj()[1],1,currentUserObj);
  localStorage.setItem("userData",JSON.stringify(userDataInSaving))
}