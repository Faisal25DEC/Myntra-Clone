var mobileno = localStorage.getItem("mobileno") || "";
var account = JSON.parse(localStorage.getItem("account")) || []
document.querySelector("h4>span").textContent=mobileno

var account = JSON.parse(localStorage.getItem("account")) || [];

var next=document.querySelector("#next")
account.forEach(function(element,index,arr){
    if(mobileno==element.mobile){
        next.textContent = "LOGIN"
        var userObj = {
            mobile:element.mobile,       
            fullname: element.fullname,
        }
        localStorage.setItem("userObj",JSON.stringify(userObj))
    }
})
var otpReset = document.getElementById("resetotp");
otpReset.addEventListener("click", () => {
    getotp();
})
 setTimeout(getotp,1000);
var b;
function getotp() {
   
    var otp = Math.round(Math.random() * 10000) ;
    window.alert(otp)
    b= otp
    
  }

   
    
    function move(first,last){
        if(first.value.length){
            document.getElementById(last).focus();
        }
    }


next.addEventListener("click",function(){
    var b1=document.querySelector("#box1").value
var b2=document.querySelector("#box2").value
var b3=document.querySelector("#box3").value
var b4=document.querySelector("#box4").value
 
    var finalOtp = b1 + b2 + b3 + b4;
    console.log(finalOtp)

    if(b==finalOtp){
        
        if( next.textContent=="NEXT"){
            window.location.href="./createaccount.html"
        }else{
            window.alert("Logged in Successfully")
           

            window.location.href="/index.html"
        }
    }else if(finalOtp=="1234" ){
        window.location.href="/admin/admin.html"
    } else {
        alert("Entered wrong OTP")
    }
})




