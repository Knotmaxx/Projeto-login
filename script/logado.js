const msgBoasVindas = document.querySelector("h1")
const btn = document.querySelector("button")
const usuarioValido = JSON.parse(localStorage.getItem("usuarioValido"))

if(localStorage.token == null){
  alert("Esteja logado para Entrar")
  if(history.length == 2){
    window.history.back()
  }else{
    window.location.replace("index.html")
}else{
  msgBoasVindas.innerHTML = `Bem vindo ${usuarioValido.nome}`
  localStorage.removeItem("token")
  localStorage.removeItem("usuarioValido")
  
}

btn.addEventListener("click",() =>{
  window.location.replace("index.html")
})

