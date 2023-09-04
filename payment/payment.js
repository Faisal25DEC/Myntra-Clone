function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

document
  .querySelectorAll(".content .radio_content")
  .forEach(function (element) {
    element.hidden = true;
  });
// document.querySelector(".content .radio_content:first-child").show();

/* when any radio element is clicked, Get the attribute value of that clicked radio element and show the radio_content div element which matches the attribute value and hide the remaining tab content div elements */
document.querySelectorAll(".radio_wrap").forEach(function (element) {
  element.addEventListener("click", function () {
    radioId = element.getAttribute("for");
    console.log(radioId);
    document.querySelectorAll(".cod-input").forEach((element) => {
      console.log({ element });
      element.disabled = true;
    });
    var currRadio = document.getElementById(radioId);
    console.log(currRadio);
    currRadio.disabled = false;
    var current_raido = event.target.attributes["data-radio"];
    console.log({ current_raido });
    current_raido.disabled = false;
    // console.log(current_raido.attributes.for.value);

    document.querySelectorAll(" .radio_content").forEach(function (element) {
      element.style.display = "none";
      console.log(element);
    });
    document.querySelector("." + current_raido.value).style.display = "block";

    console.log({ current_raido });
  });
});
var secondTabH4 = document.querySelector("#secondTab>.cash-on-delivery>h4");
var randomNumber = Math.floor(Math.random() * 100000);
secondTabH4.textContent = randomNumber;

var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
console.log(cartArray);
var totalPrice = cartArray.reduce((acc, curr) => {
  return acc + +curr.price;
}, 0);
var mrpPrice = cartArray.reduce((acc, curr) => {
  console.log(acc);
  console.log(curr.price);
  return acc + +curr.strikedoffprice;
}, 0);
console.log(mrpPrice);
var totalPricetext = document.querySelector(".total-price>p:nth-child(2)");
totalPricetext.textContent = `Rs. ${totalPrice}`;
var mrpText = document.querySelector(".payment-mrp>p:nth-child(2)");
mrpText.textContent = `Rs. ${mrpPrice}`;

var discountText = document.querySelector(".payment-discount>p:nth-child(2)");
discountText.textContent = `Rs. ${totalPrice - mrpPrice}`;

var paymentButton = document.querySelectorAll(".pay-now");
paymentButton.forEach((element) => {
  element.addEventListener("click", function () {
    alert("payment successfull");
  });
});

var homepage = document.getElementById("homePage");
homepage.addEventListener("click", function () {
  window.location.assign("/index.html")
})