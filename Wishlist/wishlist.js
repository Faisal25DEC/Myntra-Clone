var wishlistArr = JSON.parse(localStorage.getItem("wishlistArr")) || [];

display(wishlistArr);

function display(array) {

  var parent = document.querySelector("#wishlistContainer");
  parent.innerHTML = "";

  if (wishlistArr.length == 0) {
   
    // parent.innerHTML = "";
    var a = document.querySelector("#wishlistContainer");
    a.style.display = "none";
    var b = document.querySelector("h3");
    b.style.display = "none";

    var emptydiv = document.querySelector("#emptyWishlist");
    emptydiv.style.display = "block";
    var emptyImg = document.createElement("img");
    emptyImg.setAttribute(
      "src",
      "https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
    );
    var emptyH = document.createElement("h2");
    emptyH.textContent = "YOUR WISHLIST IS EMPTY";
    var emptyP = document.createElement("p");
    emptyP.textContent =
      "Add items that you like to your wishlist. Review them anytime and easily move them to the bag.";

    var emptyWishlistBtn = document.createElement("button");
    emptyWishlistBtn.textContent = "CONTINUE SHOPING";
    emptyWishlistBtn.setAttribute("id", "emptyWishlistbtn");
    emptyWishlistBtn.addEventListener("click", () => {
      window.location.assign("/productPage/productItem/product.html")
    })

    emptydiv.append(emptyImg, emptyH, emptyP, emptyWishlistBtn);
  } else {
   
    // parent.innerHTML = "";
    array.forEach(function (element, index) {
      
      if (array.length == 1) {
        document.querySelector("#totalWishlistItem").textContent =
          array.length + " item";
      } else {
        document.querySelector("#totalWishlistItem").textContent =
          array.length + " items";
      }

      var div = document.createElement("div");

      var removeBtn = document.createElement("button");
      removeBtn.innerHTML =
        '<i class="fa-solid fa-xmark" style="color: #000000;opacity: 0.7;scale:1;"></i>';
      removeBtn.setAttribute("id", "removeBtn");
      removeBtn.addEventListener("click", function () {
        wishlistArr.splice(index, 1);
        display(wishlistArr);
        localStorage.setItem("wishlistArr", JSON.stringify(wishlistArr));
         window.location.reload();
      });

      var img = document.createElement("img");

      img.setAttribute("src", element.image1);

      var imgDiv = document.createElement("div");
      imgDiv.setAttribute("id", "imgDiv");
      imgDiv.append(img);

      imgDiv.addEventListener("click", function () {
        var itemObj = {
          imageURL1: element.image1,
          imageURL2: element.image2,
          imageURL3: element.image3,
          imageURL4: element.image4,
          imageURL5: element.image5,

          name: element.name,
          brand: element.brand,

          price:element.strikedoffprice,
          discountedPrice: element.price,
          discountPercentage: Math.round(((element.strikedoffprice - element.price) / element.strikedoffprice)*100)
            ,
        };
        localStorage.setItem("itemDetails", JSON.stringify(itemObj));
        window.location.assign("/intem/item.html")
      });
      
      // var h3 = document.createElement("h3");
      // h3.textContent = element.brand;

      var name = document.createElement("p");
      name.textContent = element.name;

      var nameDiv = document.createElement("div");
      nameDiv.setAttribute("id", "nameDiv");
      nameDiv.append(name);

      var smalldiv = document.createElement("div");

      var price = document.createElement("p");
      price.textContent = "Rs. " + element.price;

      var stprice = document.createElement("p");
      stprice.textContent = "Rs " + element.strikedoffprice;

      var discount = document.createElement("p");
      discount.textContent = element.discount;

      smalldiv.setAttribute("id", "price-small-div");
      smalldiv.append(price, stprice, discount);

      var cartButton = document.createElement("button");
      cartButton.textContent = "MOVE TO BAG";
      cartButton.setAttribute("id", "cartButton");

      cartButton.addEventListener("click", function () {

          
        var sizeButton = document.querySelectorAll("#xyz");
          var sizeButtonArray = Array.from(sizeButton);
          defaultButtonclass(sizeButtonArray);        


        var selectSizeAlert = document.querySelector(".select-size-alert");
        selectSizeAlert.style.display = "none";
        var sizePopup = document.querySelector("#sizeDiv");
        sizePopup.style.display = "block";
        var crossBtn = document.querySelector("#crossBtn");
        crossBtn.addEventListener("click", function () {
          sizePopup.style.display = "none";
        });
         
        var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

         var discount = Math.round(((element.strikedoffprice - element.price ) / element.strikedoffprice )* 100) 
         itemObj = {
          imgUrl: element.image1,
          brand: element.brand,
          name: element.name,
          price: element.price,
          strikedoffprice: element.strikedoffprice,
          discount: discount,
         quantity: 1,
        };

       
  
      
       
        var sizeButton = document.querySelectorAll("#xyz");
          var sizeButtonArray = Array.from(sizeButton);
          sizeButtonArray.forEach(function (btn) {
             btn.addEventListener("click", function () {
              defaultButtonclass(sizeButtonArray);
               btn.classList.add("clicked");  
               btn.style.color = "red";
               itemObj["size"] = btn.value;
              
               
            })
          })
        
          
          var sizeButtonClicked = sizeButtonArray.filter((element) => {
            return element.classList.contains("clicked") > 0;
          });
        
        
        // console.log(addedItem)
        
          
        var sizeSubmit = document.querySelector("#sizeSubmitbtn");
        sizeSubmit.addEventListener("click", function () {

          var addedItem = cartArray.find((element) => {
         
            return (
              element.brand == itemObj.brand &&
              element.name == itemObj.name &&            
              element.size ==  itemObj.size
            );
          });
          if (addedItem) {
            addedItem.quantity += 1;
          
            localStorage.setItem("cartArray", JSON.stringify(cartArray));
            sizePopup.style.display = "none";
            wishlistArr.splice(index, 1);
            display(wishlistArr);
  
            localStorage.setItem("wishlistArr", JSON.stringify(wishlistArr));
            window.location.reload();
           
          } else {
           
            if (itemObj.size == undefined) {
              var alert = document.querySelector(".select-size-alert");
              alert.style.display = "block"
            } else {
            cartArray.push(itemObj);
            localStorage.setItem("cartArray", JSON.stringify(cartArray));
            sizePopup.style.display = "none";
            wishlistArr.splice(index, 1);
            display(wishlistArr);
  
            localStorage.setItem("wishlistArr", JSON.stringify(wishlistArr));
            window.location.reload();
            }
           
          }
          
          
         

         
        })
       

        // var selectSizeAlert = document.querySelector(".select-size-alert");
        // if (sizeButtonClicked.length == 0) {
        //   selectSizeAlert.style.display = "block";
        // }
      });
      // ---------------------------------------------------------------------------
      div.append(removeBtn, imgDiv, nameDiv, smalldiv, cartButton);

      parent.append(div);
    });
  }
}

function defaultButtonclass(btnArray) {
  btnArray.forEach(function (btn) {
    btn.style.color = "black"
    btn.classList.remove("clicked");
   })
}