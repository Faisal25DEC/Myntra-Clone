var totalItem = localStorage.getItem("totalitems") || 0;
document.querySelector(".pricedetails >span").textContent = "Total item " + totalItem;



var MRP = localStorage.getItem("totalMRP")||0;
document.querySelector(".totalPrice").textContent = "Rs " + MRP;

var totalDiscount = localStorage.getItem("totalDiscount")||0;
document.querySelector(".filldiscount").textContent = "Rs -" + totalDiscount;

var totalAmt = localStorage.getItem("totalAmt")||0;
document.querySelector(".amount_pay").textContent = "Rs " + totalAmt;


var submitbtn = document.querySelector("#sub");
submitbtn.addEventListener("click", function () {
    var form = document.querySelector("form");
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var mobNum = document.querySelector("#mobno").value;
    var pinCode = document.querySelector("#pincode").value;
    var address = document.querySelector("#Address").value;
    var loaclity = document.querySelector("#locality").value;
    var city = document.querySelector("#city").value;
    var state = document.querySelector("#state").value;

    if (name == "" || mobNum == "" || pinCode == "" || address == "" || loaclity == "" || city == "" || state == "") {
        var alertp = document.querySelector("#adtype+p")
        alertp.textContent = "Please fill all the details"
        alertp.style.color = "red"

    } else {
        window.location.assign("/payment/payment.html")
    }


    

    
})
var homepage = document.getElementById("homePage");
homepage.addEventListener("click", function () {
  window.location.assign("/index.html")
})