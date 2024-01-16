/****||||DAYJS LIBRARY||||****/
function getRandomDate(){
  return dayjs().add(7,'days').format('ddd, MMM D');
}


/****||||MY PRODUCTS||||****/
products = [
  {
    productImage: "images/product/Tommy Bahama - King Comforter Set.webp",
    productName: "Tommy Bahama - King Comforter Set, Cotton Reversibl...",
    productId: "912jSkohH9LACUF10001000QL80FMwebp",
    productSpecialTag: "King",
    productRating:{
      averageRating:4.3,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(338)"
    },
    productPrice:[79,71],
    productListedPrice: "$93.71",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "bedsheet"
  },  {
    productImage: "images/product/Potted Faux Artificial.webp",
    productName: "Potted Faux Artificial Flowers Realistic...",
    productId:"81IEoL1uwLACSR525789FMwebpQL65",
    productSpecialTag: "Orchid",
    productRating:{
      averageRating:4.7,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(346)"
    },
    productPrice:[54,16],
    productListedPrice: "$83.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "flowerpot"
  },  {
    productImage: "images/product/HOWE Modern Sofa Couch-cream-white.webp",
    cartImage:"images/product/HOWE Modern Sofa Couch",
    productColor: ["cream-white","stone-gray","dark-gray"],
    productName: "HOWE Modern Sofa Couch, 24''Extra Deep Seat...",
    productId: "81lPWRkOwQLACUF8941000QL80FMwebp",
    productSpecialTag: "Striped",
    productRating:{
      averageRating:5,
      starCount:"images/ratings/rating-50.png",
      ratingCount: "(1)"
    },
    productPrice:[399,99],
    productListedPrice: "$499.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "sofa"
  },  {
    productImage: "images/product/End Table Modern Living.webp",
    productName: "End Table Modern Living Room Table Rectan...",
    productId:"91ovdPFgvlLACSR525789FMwebpQL65",
    productSpecialTag: "Luxury",
    productRating:{
      averageRating:4.8,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(9675)"
    },
    productPrice:[129,99],
    productListedPrice: "$189.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "Table"
  },  {
    productImage: "images/product/WLNUI Set of 2 White-black.webp",
    cartImage:"images/product/WLNUI Set of 2 White",
    productColor: ["black","light-gray","white"],
    productName: "WLNUI Set of 2 White Decorative Lumbar Fluffy Pillow...",
    productId: "81B08DYUqVLACUF10001000QL80FMwebp",
    productSpecialTag: "Wool",
    productRating:{
      averageRating:4.5,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(11621)"
    },
    productPrice:[16,99],
    productListedPrice: "$19.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "pillow"
  },  {
    productImage: "images/product/Marble Comforter Set.webp",
    productName: "Marble Comforter Set, Full/Queen, Rose...",
    productId:"91mhajBLw7LACSR525789FMwebpQL65",
    productSpecialTag: "Queen",
    productOptions: "2 sizes",
    productRating:{
      averageRating:4.6,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(3623)"
    },
    productPrice:[25,88],
    productListedPrice: "$59.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "bedsheet"
  }, {
    productImage: "images/product/Chic Home 20 Mackenzie-black.webp",
    cartImage:"images/product/Chic Home 20 Mackenzie",
    productColor: ["black","beige","red"],
    productName: "Chic Home 20 Mackenzie Complete Piec...",
    productId: "81oap4FaVnLACUF10001000QL80FMwebp",
    productSpecialTag: "King",
    productOptions: "2 sizes",
    productRating:{
      averageRating:4.2,
      starCount:"images/ratings/rating-40.png",
      ratingCount: "(148)"
    },
    productPrice:[125,13],
    productListedPrice: "$151.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "bedding"
  } ,  {
    productImage: "images/product/110.2'L-Shaped Sectional Modern.webp",
    productName: "110.2'L-Shaped Sectional Modern Style Couch Living Room Asymmetrical Sofa",
    productId: "81UK9sS1nHLACUF8941000QL80FMwebp",
    productSpecialTag: "wood",
    productRating:{
      averageRating:4.6,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(10657)"
    },
    productPrice:[349,71],
    productListedPrice: "$411.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "sofa"
  }, {
    productImage: "images/product/Acanva Modern Convertible Sectional.webp",
    productName: "Acanva Modern Convertible Sectional Modular Sofa...",
    productId: "710YslNN9lLACUF10001000QL80FMwebp",
    productSpecialTag: "wood",
    productRating:{
      averageRating:3.2,
      starCount:"images/ratings/rating-30.png",
      ratingCount: "(163)"
    },
    productPrice:[320,65],
    productListedPrice: "$349.65",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "sofa"
  }, {
    productImage: "images/product/AMERLIFE Sectional Sofa- Modular.webp",
    productName: "AMERLIFE Sectional Sofa- Modular Sectional Couch...",
    productId: "81quapuqnBLACUF8941000L80FMwebp",
    productSpecialTag: "wood",
    productRating:{
      averageRating:3.9,
      starCount:"images/ratings/rating-40.png",
      ratingCount: "(679)"
    },
    productPrice:[169,99],
    productListedPrice: "$199.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "sofa"
  }, {
    productImage: "images/product/Volcanics Set of 4 Farmhouse.webp",
    productName: "Volcanics Set of 4 Farmhouse Buffalo Check Plaid Decorative Throw...",
    productId: "81CwXiMgOLACUF10001000QL80FMwebp",
    productSpecialTag: "wood",
    productRating:{
      averageRating:(5.0).toFixed(1),
      starCount:"images/ratings/rating-50.png",
      ratingCount: "(20)"
    },
    productPrice:[13,99],
    productListedPrice: "$17.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "pillow"
  },   {
    productImage: "images/product/Lann's Linens - 90'.webp",
    productName: "Lann's Linens - 90' x 156' Premium Tablecloth...",
    productId:"91McOd2zLACSR525789FMwebpQL65",
    productOptions: "5 sizes",
    productRating:{
      averageRating:4.6,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(1778)"
    },
    productPrice:[25,70],
    productListedPrice: "$39.51",
    deliveryDate: `${getRandomDate()}`,
    deliveryCharge: 2056,
    shippingLocation: "Ship to Bangladesh",
    keyword: "Tablecloth"
  },  {
    productImage: "images/product/Cotton Canvas Throw Pillow.webp",
    productName: "Cotton Canvas Throw Pillow Covers by Encasa Pack of 2 Natura...",
    productId: "511DbmkixTLACUF10001000QL80FM",
    productSpecialTag: "Wool",
    productRating:{
      averageRating:4.3,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(8508)"
    },
    productPrice:[9,98],
    productListedPrice: "$10.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "pillow"
  },  {
    productImage: "images/product/Harbor House Cozy Cotton.webp",
    productName: "Harbor House Cozy Cotton Comforter Set - Classic Modern De..",
    productId: "81sXvaE56ZLACUF10001000QL80FMwebp",
    productSpecialTag: "Queen",
    productRating:{
      averageRating:4.3,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(244)"
    },
    productPrice:[150,87],
    productListedPrice: "$170.87",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "bedsheet"
  },  {
    productImage: "images/product/Madison Park Tufted Chenille-pumpkin-white.webp",
    cartImage:"images/product/Madison Park Tufted Chenille",
    productColor: ["pumpkin-white","floral-white","white"],
    productName: "Madison Park Tufted Chenille Cotton Comforter, Al...",
    productId: "81nVJpYgvMLACUF10001000QL80FMwebp",
    productSpecialTag: "King",
    productRating:{
      averageRating:4.3,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(2309)"
    },
    productPrice:[143,99],
    productListedPrice: "$153.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "bedsheey"
  },  {
    productImage: "images/product/Benson Mills Christmas-cream-white.webp",
    cartImage:"images/product/Benson Mills Christmas",
    productColor: ["cream-white","red","pumpkin-white"],
    productName: "Benson Mills Christmas Ribbons Engine...",
    productId:"61dcBkIplNLACUL760",
    productOptions: "8 sizes",
    productRating:{
      averageRating:4.7,
      starCount:"images/ratings/rating-45.png",
      ratingCount: "(10906)"
    },
    productPrice:[19,99],
    productListedPrice: "$20.99",
    deliveryDate: `${getRandomDate()}`,
    shippingLocation: "Ship to Bangladesh",
    keyword: "Tablecloth"
  },
];

function searchProductWithId(productId){
  for (let obj of products){
    if(obj.productId==productId){
      return obj
    }
  } 
}
    
    

/****||||FILTER PRODUCTS||||****/
let allProducts = products;
let timeoutId;
function filterProductsForSearch(){
  let myInput = document.querySelector(".search-input_icon input").value.toUpperCase();
  matchingProduct = [];
  products = allProducts
  for(let product of products){
    productName = (product.productName).toUpperCase();
    productNameArr = productName.split(' ')
    keyword = (product.keyword).toUpperCase()
   /* if(myInput == productName.slice(0,myInput.length) || myInput == keyword.slice(0,myInput.length)
      ){
      matchingProduct.push(product)
      }*/
    for(let word of productNameArr){
      if(myInput == word.slice(0,myInput.length) || 
         myInput == keyword.slice(0,myInput.length) || 
         myInput == productName.slice(0,myInput.length)){
           
        productDuplicate = false
        for(let myProduct of matchingProduct){
          if(myProduct.productName == product.productName){
            productDuplicate = true;
          }
        }
        
        if(!productDuplicate){
          matchingProduct.push(product)
        }
      }
    }
    
  }
  
  products = matchingProduct;
  if(products[0]){
    const mainDiv = document.getElementById("js-main");
    mainDiv.style.cssText = ''
    runHomePage()
  }else{
    const mainDiv = document.getElementById("js-main");
    mainDiv.innerHTML = "Sorry, No match found";
    mainDiv.style.cssText = "display:flex;align-items:center;justify-content:center;font-weight:bold;min-height:40vh;font-size:150%;font-family: 'Amazon Ember',sans-serif;color:rgba(0,0,0,.5)"
  }
  if(myInput==""){
    products = allProducts;
    const mainDiv = document.getElementById("js-main");
    mainDiv.style.cssText = ''
    runHomePage()
  }
}
let mySavedSearch