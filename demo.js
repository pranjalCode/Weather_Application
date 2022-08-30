function submitBlw(){if(1==sendValidationData()){
    var e=document.getElementById("user_name").value,
    t=document.getElementById("mobile").value,
    n=document.getElementById("email").value,
    m=document.getElementById("user_comment").value
    
   }}

function responseMessageDisplay(e){1==e?(document.getElementById("check").style.display="block",
document.getElementById("check").innerHTML="Thank you!. Your information is successfully sent...",
document.getElementById("check").style.color="#19a95a"):
(document.getElementById("check").style.display="block",
document.getElementById("check").innerHTML=" ",
document.getElementById("check").style.color="#ff0000"),
setTimeout(function(){document.getElementById("check").style.display="none",
document.getElementById("check").innerHTML=""},1e3),
console.warn("We are sorry, but something went wrong!!!"),window.location="success.html",clearForm();}

f

function clearForm(){document.getElementById("user_name").value="",
document.getElementById("mobile").value="",
document.getElementById("email").value="",
document.getElementById("user_comment").value=""}










function sendValidationData(){var e,t,n,m=document.getElementById("user_name").value,
                                        l=document.getElementById("mobile").value,
                                        o=document.getElementById("email").value;
            return""==m&&0==m.length?(document.getElementById("user-name").innerHTML="Name cannot be Empty"
            ,e=!1):(document.getElementById("user-name").innerHTML="",e=!0),
            /^\d{10}$/.test(l)?(document.getElementById("user-mobile").innerHTML="",t=!0):
            (document.getElementById("user-mobile")
            .innerHTML="Mobile Number Must be 10 digits",t=!1)
            ,/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(o)?
            (document.getElementById("user-email").innerHTML="",n=!0):
            (document.getElementById("user-email").innerHTML="Email cannot be Empty",n=!1),1==e&&1==t&&1==n}




           