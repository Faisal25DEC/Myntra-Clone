var cartArr = JSON.parse(localStorage.getItem("cartArray")) || [];

updateDisplay(cartArr);
// console.log(cartArr);
function updateDisplay(arr) {
  // --------------------------------------------------------------

  if (cartArr.length == 0) {
    var a = document.querySelector(".parent")
    a.style.display = "none"
    var emptydiv = document.querySelector("#emptyCart");
    emptydiv.style.display = "block"
    var img = document.createElement("img");
    img.setAttribute("src", "https://constant.myntassets.com/checkout/assets/img/empty-bag.webp")
    var h3 = document.createElement("h2");
    h3.textContent = "Hey, it feels so light !"
    var p1 = document.createElement("p");
    p1.textContent = "There is nothing in your bag. Let's add some items"
    
    emptydiv.append(img,h3,p1);
    

  } else {
    var totalitems = cartArr.length;
    

    localStorage.setItem("totalitems", totalitems);
    // console.log(totalitems);
    document.querySelector(".items").textContent = totalitems;

    var sum = 0;

    var MRP = cartArr.reduce(function (sum, a, ind) {
      return sum + +cartArr[ind].strikedoffprice.split(" ")[1];
    }, 0);

    document.querySelector(".totalPrice").textContent = "Rs " + MRP;

    localStorage.setItem("totalMRP", MRP);

    var totalAmt = cartArr.reduce(function (sum, a, ind) {
      // console.log(cartArr[ind].price.split(" ")[1])
      return sum + +cartArr[ind].price.split(" ")[1];
    }, 0);
    document.querySelector(".amount_pay").textContent = "Rs " + totalAmt;
    localStorage.setItem("totalAmt", totalAmt);

    var applybtn = document.querySelector(".apply");
    applybtn.addEventListener("click", function () {
      var coupen = document.querySelector("#promo").value;
      if (coupen == "MYNTRA") {
        var newtotal = (totalAmt * 80) / 100;
        document.querySelector(".amount_pay").textContent = "Rs " + newtotal;
        localStorage.setItem("totalAmt", newtotal);
        var applyp = document.querySelector(".promocode + p");
        applyp.textContent = "You have saved Rs " + (totalAmt * 20) / 100;
        applyp.style.color = "green";
        applyp.style.fontSize = "0.8rem";
      } else if (coupen == "") {
        var applyp = document.querySelector(".promocode + p");
        applyp.textContent = "Please enter promo code *";
        applyp.style.color = "#e7515b";
        applyp.style.fontSize = "0.8rem";
      } else {
        var applyp = document.querySelector(".promocode + p");
        applyp.textContent =
          "Sorry, this coupon is not valid for this user account";
        applyp.style.color = "#e7515b";
        applyp.style.fontSize = "0.8rem";
      }
    });
    // console.log(totalAmt)
    var totalDiscount = MRP - totalAmt;

    localStorage.setItem("totalDiscount", totalDiscount);
    document.querySelector(".filldiscount").textContent =
      "Rs -" + totalDiscount;

    // --------------------------------------------------------------

    var parent = document.querySelector(".container");
    parent.innerHTML = "";
    arr.forEach(function (ele, ind, arr) {
      var card = document.createElement("div");
      var img = document.createElement("img");
      var cartimgDiv = document.createElement("div");
      cartimgDiv.setAttribute("id", "cartimgDiv");
      var card1 = document.createElement("div");
      card1.setAttribute("id", "card1");

      var brandname = document.createElement("h5");
      var producttype = document.createElement("p");
      var price = document.createElement("p");
      var stprice = document.createElement("p");
      stprice.textContent = ele.strikedoffprice;

      var discount = document.createElement("p");
      discount.textContent = ele.discount;
      var priceSmallDiv = document.createElement("div");
      priceSmallDiv.setAttribute("id", "priceSmallDiv");
      priceSmallDiv.append(price, stprice, discount);

      var remove = document.createElement("button");
      // --------------------------------------------------------
      var removeDiv = document.createElement("div");
      removeDiv.setAttribute("id", "removeDiv");
      removeDiv.append(remove);
      // --------------------------------------------------------

      brandname.textContent = ele.brand;
      img.setAttribute("src", ele.imgUrl);
      producttype.textContent = ele.name;
      price.textContent = ele.price;
      remove.innerHTML =
        '<i class="fa-solid fa-xmark" style="color: #000000;"></i>';

      remove.addEventListener("click", function () {
        cartArr.splice(ind, 1);
        localStorage.setItem("cartArray", JSON.stringify(cartArr));

        alert("Product removed from cart!");
        updateDisplay(cartArr);
      });

      // ------------------size and quantity----------------------
      var SandQ = document.createElement("div");
      var Sdiv = document.createElement("div");
      var Sizep = document.createElement("h5");
      Sizep.textContent = "Size :";
      var SizeNump = document.createElement("h5");
      SizeNump.textContent = "L";
      Sdiv.append(Sizep, SizeNump);

      var Qdiv = document.createElement("div");
      var QuanP = document.createElement("h5");
      QuanP.textContent = "Qty :";
      var QuanNump = document.createElement("h5");
      QuanNump.textContent = "1";
      Qdiv.append(QuanP, QuanNump);

      SandQ.append(Sdiv, Qdiv);
      SandQ.setAttribute("id", "SandQ");
      // ------------------size and quantity----------------------

      // ---------------------Delivery---------------------
      var delDiv = document.createElement("div");
      var deliveryP = document.createElement("p");
      deliveryP.innerHTML =
        '<i class="fa-solid fa-check" style="color:#53c2ac;"></i> Delivery by';
      var deliveryDay = document.createElement("p");
      deliveryDay.textContent = "16 JUL 2023";
      delDiv.setAttribute("id", "deliveryDiv");
      delDiv.append(deliveryP, deliveryDay);

      // ---------------------------------------------

      // -------------------------------------

      var returndetDiv = document.createElement("div");
      returndetDiv.setAttribute("id", "returndetDiv");
      var returnp = document.createElement("p");
      returnp.textContent = "return available";
      var returndayp = document.createElement("p");
      returndayp.textContent = "14 days";
      returndetDiv.append(returndayp, returnp);

      // -------------------------------------
      card1.append(
        brandname,
        producttype,
        SandQ,
        priceSmallDiv,
        returndetDiv,
        delDiv
      );
      cartimgDiv.append(img);
      card.append(cartimgDiv, card1, removeDiv);
      parent.append(card);
    });
  }
}


document.querySelector("#first").addEventListener("click", function () {
  window.location.assign("./cart.html");
});

document.querySelector("#second").addEventListener("click", function () {
  window.location.assign("");
});

document.querySelector("#third").addEventListener("click", function () {
  window.location.assign("");
});

document.querySelector(".wishlist").addEventListener("click", function () {
  window.location.assign("./wishlist.html");
});

document.querySelector(".makeorder").addEventListener("click", function () {
  window.location.assign("");
});

document.querySelector("#homePage").addEventListener("click", function () {
  window.location.assign("");
});
