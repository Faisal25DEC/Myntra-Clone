//TEMPORARY OBJECT IF ITEMdETAILS IS UNDEFINED

var tempObj = {
  category: "Men",
  type: "Men T-Shirt",
  imageURL1:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
  imageURL2:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/5a6da9ac-d32e-4710-9b6d-569b454560931579692118120-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-2.jpg",
  imageURL3:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg",
  imageURL4:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg",
  imageURL5:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/d9ac560a-bf76-4ada-b37f-18aa520545821579692117859-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-5.jpg",
  color: "red",
  name: "Some T-Shirt",
  brand: "HRX",
  price: 567,
  discountedPrice: 500,
  discountPercentage: 12,
};
var itemObj = JSON.parse(localStorage.getItem("itemDetails")) || tempObj;
console.log(itemObj);

//adding the item to the item page
//displayItem() function
function displayItem(itemObj) {
  var imageContainer = document.querySelector(".item-images");
  var images = [
    itemObj.imageURL1,
    itemObj.imageURL2,
    itemObj.imageURL3,
    itemObj.imageURL4,
    itemObj.imageURL5,
  ];
  var itemBrand = document.querySelector(".item-name");
  itemBrand.textContent = itemObj.brand;
  var itemName = document.querySelector(".item-desc");
  itemName.textContent = itemObj.name;
  var itemDiscountedPrice = document.querySelector(".discounted-price");
  itemDiscountedPrice.textContent = `Rs ${itemObj.discountedPrice}`;
  var itemOriginalPrice = document.querySelector(".original-price>strike");
  itemOriginalPrice.textContent = `Rs. ${itemObj.price}`;
  var itemDiscountPercentage = document.querySelector(".discount-percentage");
  itemDiscountPercentage.innerText =  `(${itemObj.discountPercentage}%)`;
  for (var index = 0; index < images.length; index++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", images[index]);
    div.setAttribute("class", "image");
    div.append(img);
    imageContainer.append(div);
  }
}

// ---------------------------------------------

var deliveryButton = document.querySelector(".delivery-input>button");
var deliveryInput = document.querySelector(".delivery-input input");
deliveryButton.addEventListener("click", function () {
  if (deliveryInput.value == "") {
    alert("give pin code");
  } else {
    deliveryButton.innerHTML +=
      '<i class="fa-solid fa-check" style="color: #229b2a;"></i>';
    this.disabled = true;
  }
});
deliveryInput.addEventListener("change", function () {
  if (deliveryInput.value == "") {
    console.log({ deliveryButton });
    var element = deliveryButton.children[0];
    element.remove();
    console.log(element);
    deliveryButton.disabled = false;
    console.log(deliveryButton);
  }
});

// ---------------------------Add To Cart and Wishlish Button -----------------------------------------

//******************** Add To Cart Button ************************/
var addToCartButton = document.querySelector(".cart-button");

addToCartButton.addEventListener("click", function () {
  addToCartButton.classList.add("cart-button-clicked");
  console.log(addToCartButton);
  var sizeButtonArray = Array.from(sizeButton);
  var sizeButtonClicked = sizeButtonArray.filter((element) => {
    return element.classList.contains("clicked") > 0;
  });
  var selectSizeAlert = document.querySelector(".select-size-alert");
  if (sizeButtonClicked.length == 0) {
    selectSizeAlert.style.display = "block";
  } else {
    selectSizeAlert.style.display = "none";
    var cartButtonSpan = document.querySelector(".cart-button>span");
    cartButtonSpan.remove();
    //create a new span

    var goToBagSpan = document.createElement("span");
    goToBagSpan.textContent = "Go To Bag";
    goToBagSpan.innerHTML +=
      ' <i class="fa fa-regular fa-arrow-right" style="color: #fcfcfd;"></i>';

    addToCartButton.style.display = "flex";
    addToCartButton.style.alignItems = "center";
    addToCartButton.justifyContent = "space-between";

    console.log(addToCartButton);
    //add the goToBagSpan to the addtoCartButton
    addToCartButton.append(goToBagSpan);
    var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
    var addedItem = cartArray.find((element) => {
      var sizeButtonClicked = sizeButtonArray.find((element) => {
        return element.classList.contains("clicked") > 0;
      });
      return (
        element.brand == itemObj.brand &&
        element.name == itemObj.name &&
        element.price == itemObj.discountedPrice &&
        element.size == sizeButtonClicked.textContent
      );
    });
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      obj = {
        imgUrl: itemObj.imageURL1,

        brand: itemObj.brand,
        name: itemObj.name,
        price: itemObj.discountedPrice,
        strikedoffprice: itemObj.price,
        discount: itemObj.discountPercentage,
        size: sizeButtonClicked[0].textContent,
        quantity: 1,
      };
      cartArray.push(obj);
    }

    localStorage.setItem("cartArray", JSON.stringify(cartArray));

    this.disabled = true;

    goToBagSpan.addEventListener("click", function () {
      /********************************* Checking for Duplicacy ************************************************* */

     window.location.assign("/cartPage/cart.html")
    });
  }
});

/******************* Wishlist Button  ********************** */
var wishlistButton = document.querySelectorAll(".add-buttons>button");
console.log(wishlistButton);
 wishlistButton[1].addEventListener("click", function () {
  wishlistButton[1].classList.toggle("wishlist-button");
  wishlistButton[1].classList.toggle("wishlist-button-clicked");
  this.disabled = true;
  var wishlistArr = JSON.parse(localStorage.getItem("wishlistArr")) || [];
  obj = {
    image1: itemObj.imageURL1,
    image2: itemObj.imageURL2,
    image3: itemObj.imageURL3,
    image4: itemObj.imageURL4,
    image5: itemObj.imageURL5,

    brand: itemObj.brand,
    name: itemObj.name,
    price:itemObj.discountedPrice,
    strikedoffprice: itemObj.price,
    // ---------------------------------------------------------------------------check1
    discount: Math.round(itemObj.discountPercentage) + "%OFF",
  };
  var addedItem = false;
  wishlistArr.forEach(function (elementt) {
    if (elementt.name == itemObj.name && elementt.image1 == itemObj.imageURL1) {
      addedItem = true;
    }
  })
  if (addedItem) {
    
  } else {
    wishlistArr.push(obj);
    localStorage.setItem("wishlistArr", JSON.stringify(wishlistArr));
  }

});

//------------------------------------------------->Size Buttons<------------------------------------

var sizeButton = document.querySelectorAll(".size-buttons>button");
console.log(sizeButton);

var defaultButtonStyle = function (sizeButton) {
  sizeButton.forEach((element) => {
    element.style.border = "0.5px solid rgb(205, 203, 203)";
    element.style.color = " grey";
    element.classList.remove("clicked");
  });
};

sizeButton.forEach((button) => {
  button.addEventListener("click", function () {
    if (addToCartButton.classList.contains("cart-button-clicked") > 0) {
      addToCartButton.children[1].remove();
      var addToCartSpan = document.createElement("span");
      addToCartSpan.textContent = "Add To Bag";
      addToCartButton.append(addToCartSpan);
      console.log(addToCartButton);
      addToCartButton.classList.remove("cart-button-clicked");
      addToCartButton.disabled = false;
    }

    var selectSizeAlert = document.querySelector(".select-size-alert");
    selectSizeAlert.style.display = "none";
    defaultButtonStyle(sizeButton);
    button.classList.toggle("clicked");
    button.style.border = "0.5px solid rgb(238, 36, 87)";
    button.style.color = " rgb(246, 35, 70)";
    console.log(sizeButton);
  });
});

// --------------------------------------------------------------------------------------------------------------------

//call the displayItem() function on load

var carouselImages = document.querySelectorAll(".carousel>ul>li>img");
console.log(carouselImages);
var images = [
  itemObj.imageURL1,
  itemObj.imageURL2,
  itemObj.imageURL3,
  itemObj.imageURL4,
  itemObj.imageURL5,
];
carouselImages.forEach((element, index) => {
  element.src = images[index];
});

displayItem(itemObj);
