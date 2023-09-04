
var account = JSON.parse(localStorage.getItem("account")) || []
console.log(account)
document.querySelector("form").addEventListener("submit", function () {
    event.preventDefault();
    
    var mobileinput=document.querySelector("#emailormobile").value
    //  console.log(mobileinput)
   
    
    var password=document.querySelector("#password").value
    // console.log(password)
         console.log( mobileinput)
    
    account.forEach(function (element, index, arr) {
       
        console.log( element.password);
        console.log( password)
        console.log( element.mobile);
        if(password=="4444"&& (mobileinput == "1111111111" || mobileinput=="admin@gmail.com")){
            console.log("moin")
            window.location.href="/admin/admin.html"
        } else if(password== element.password  && (mobileinput == element.mobile  || mobileinput==element.email)){
            var userObj = {
                mobile:element.mobile,       
                fullname: element.fullname,
            }
            window.alert("Logged in Successfully")
            // console.log(userObj)
           
            localStorage.setItem("userObj",JSON.stringify(userObj))
            window.location.href="/index.html"
        }
    })

})