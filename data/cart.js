let cartItem = JSON.parse(localStorage.getItem("myCart")) || [];
localUser = JSON.parse(localStorage.getItem("userData"));
localUserName = localStorage.getItem("currentLoggedUser");
let index = 0;
for(let data of localUser){
  if(data.username == localUserName){
    break
  }else{
    index++
  }
}
currentLocalUser = localUser[index];

if(currentLocalUser && currentLocalUser.usercart){
  cartItem = currentLocalUser.usercart;
}

/****||||DECLARING ALL FUNCTIONS||||****/

    /****||||CHECKING CART FOR MATCH||||****/
    function getMatchedProductId(selectedProduct){
      let selectedProductId = selectedProduct.productId;
      let index = 1;
      for(let itemOfCart of cartItem){
        if(itemOfCart.id==selectedProductId){
          return index
        }
        index++
      }
    }
    
    /****||||CHANGING CART||||****/
    function applyChangesInCart(matchedProduct,object,selectedColor){
      
      if(selectedColor !== "undefined"){
        if(matchedProduct && selectedColor==cartItem[matchedProduct-1].color){
          cartItem[matchedProduct-1].quantity += 1
        }
        else{
          cartItem.push({
          id: object.productId,
          name: object.productName,
          image: `${object.cartImage}-${selectedColor}.webp`,
          price: object.productPrice,
          specialTag: object.productSpecialTag,
          quantity:1,
          color:`${selectedColor}`,
          deliveryCharge:object.deliveryCharge?`${object.deliveryCharge}`:false,
          deliveryDate: getRandomDate()
        });
        }
      }
      else{
        if(matchedProduct){
          cartItem[matchedProduct-1].quantity += 1
        }
        else{
          cartItem.push({
          id: object.productId,
          name: object.productName,
          image: object.productImage,
          price: object.productPrice,
          specialTag: object.productSpecialTag,
          quantity:1,
          deliveryCharge:object.deliveryCharge?`${object.deliveryCharge}`:false,
          deliveryDate: getRandomDate()
        });
        }
      }
      /**********/
      saveCartInLocalStorage()
    }
    
    
    /****||||SAVE CART IN LOCAL STORAGE||||****/
    function saveCartInLocalStorage(){
      localStorage.setItem("myCart",JSON.stringify(cartItem))
      if(currentLocalUser && currentLocalUser.usercart){
        currentLocalUser.usercart = cartItem;
        localUser.splice(index,1,currentLocalUser);
        localStorage.setItem("userData",JSON.stringify(localUser))
      }
    }
    
    /****||||COUNT CART ITEMS||||****/
    function getItemsQuantityInCart(){
      let totalItems = 0;
      for(let item of cartItem){
         totalItems += item.quantity
      }
      return totalItems
    }
    
    /****||||ADD SELECTED PRODUCT TO CART||||****/
    function addToCart(object,selectedColor){
      let matchedProductIndex = getMatchedProductId(object);
      applyChangesInCart(matchedProductIndex,object,selectedColor)
    }

    function getTotalCostOfCart(){
      let priceDollar = 0;
      let priceCents = 0;
      cartItem.forEach((item)=>{
        priceDollar += (item.price[0])*(item.quantity);
        priceCents += (item.price[1])*(item.quantity);
        if(item.deliveryCharge){
          priceCents += Number(item.deliveryCharge);
        }
      })
      if(priceCents>100){
        priceDollar += Math.floor((priceCents/100))
        priceCents = (priceCents%100)
      }
      (priceCents<10) && (priceCents = `0${priceCents}`);
      let costArr = [priceDollar,priceCents];
      return costArr
    }
/****||||---------------------------||||****/





