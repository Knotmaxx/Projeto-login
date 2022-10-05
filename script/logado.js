const msgBoasVindas = document.querySelector("h1")
const btn = document.querySelector("button")
const usuarioValido = JSON.parse(localStorage.getItem("usuarioValido"))

if(localStorage.token == null){
  alert("Esteja logado para Entrar")
  window.location.replace("login.html")
  document.querySelector("body").style.display ="none"
}else{
  msgBoasVindas.innerHTML = `Bem vindo ${usuarioValido.nome}`
  localStorage.removeItem("token")
  localStorage.removeItem("usuarioValido")
  
}

btn.addEventListener("click",() =>{
  window.location.replace("login.html")
})

