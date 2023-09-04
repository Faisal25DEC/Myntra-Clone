var mobileno=localStorage.getItem("mobileno")

document.querySelector("#mobileno>span").textContent=mobileno

var account =JSON.parse(localStorage.getItem("account")) ||[]

document.querySelector("#button").addEventListener("click",function(){
    event.preventDefault();
    var p=document.querySelector("#pass").value
    var n=document.querySelector("#fname").value
    var e=document.querySelector("#email").value
    // var g=document.getElementsByName("Gender")
    var g;
    var male=document.querySelector("#male")
    var female=document.querySelector("#female")
    if(male.checked){
        g=male.value;
    }else if(female.checked){
        g=female.value;
    }
    console.log(g)
    var am=document.querySelector("#altmobil").value
    var hm=document.querySelector("#hint").value
    
    var userObj = {
        mobile:mobileno,       
        fullname:n,
    }
    localStorage.setItem("userObj",JSON.stringify(userObj))
    
    var obj = {
        mobile:mobileno,
        password:p,
        fullname:n,
        email:e,
        gender:g,
        altmobile:am,
        hintmobile:hm
    }

    account.push(obj)
    localStorage.setItem("account",JSON.stringify(account))
    window.location.assign("/index.html")
    // localStorage.clear("account")
})