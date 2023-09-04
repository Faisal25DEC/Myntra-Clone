
// var  mobileno=JSON.parse(localStorage.getItem("mobileno")) || null
document.querySelector("#continue").addEventListener("click",function(){
    event.preventDefault();
    var mobile =document.querySelector("#mobileno").value
    // console.log(mobile)
    // mobileNo.push(mobile);
    // localStorage.setItem("mobileno",JSON.stringify(mobile));
    localStorage.setItem("mobileno",mobile);
    if(mobile.length =="10"){
    window.location.href="./verificationPage.html"
    }else{
        document.querySelector("input+span").textContent="Please enter valid Mobile Number (10 digits)"
        // window.alert("Please enter valid Mobile Number (10 digits)")
    }
})

