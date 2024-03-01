const name= document.getElementById("name")
const pass= document.getElementById("pass")
let alert= document.getElementById("alert")
const login = document.getElementById("login")

login.addEventListener("click",function () {
    if(name.value=="AdminSEF123" && pass.value=="SeF@ctORy$$456")
{
    window.location="../todo.html"
}
else
{
    alert.innerHTML="wrong username or password"
}
}
)
