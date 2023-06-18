const url="http://localhost:4000"

var chessUser=localStorage.getItem("chessUser")

if(chessUser==="islive"){
  document.getElementById("playgame1").innerText="Logout"
  document.getElementById("playgame2").innerText="Logout"
}else{
  document.getElementById("playgame1").innerText="Play Game"
  document.getElementById("playgame2").innerText="Play Game"
}

let playgame1=document.querySelector("#playgame1")
let playgame2=document.querySelector("#playgame2")

let logo=document.querySelector(".logo")
logo.addEventListener("click",(e)=>{
  e.preventDefault();
  if(playgame1.innerText==="Logout" || playgame2.innerText==="Logout"){
    location.href="./chessPage.html"
  }else{
    location.href="./index.html"
  }
})

playgame1.addEventListener("click",(e)=>{
    e.preventDefault();
    if(playgame1.innerText==="Logout" || playgame2.innerText==="Logout"){
        localStorage.setItem("chessUser","isdied")
        alert("logout successfully");
        location.href="./index.html"
        
      }else{
        alert("PLEASE LOGIN")
      }
  })
  
  playgame2.addEventListener("click",(e)=>{
    e.preventDefault();
    if(playgame1.innerText==="Logout" || playgame2.innerText==="Logout"){
        localStorage.setItem("chessUser","isdied")
        alert("logout successfully");
        location.href="./index.html"
        
      }else{
        alert("PLEASE LOGIN")
      }
  })