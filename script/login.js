const eyeInput = document.querySelector(".fa-eye")
const btnEntrar = document.querySelector(".login__btn")
const nome = document.querySelector("#nome")
const senha = document.querySelector("#senha")
const listaUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]")

eyeInput.addEventListener("click", () => {
    if(senha.getAttribute("type") == "password"){
      senha.setAttribute("type","text")
    }else{
      senha.setAttribute("type","password")
    }
})
btnEntrar.addEventListener("click", (event) =>{
    validacao(event)
})

function msgErro() {
  document.querySelector(".login__c-msg").setAttribute("style", "display:flex")
  document.querySelector(".login__fieldset").setAttribute("style", "padding-bottom:0px")
}

function validacao(event){
  let valid = false
  listaUsuarios.forEach((usuario) =>{
    if(usuario.nome == nome.value & usuario.senha == senha.value){
      const token = Math.random().toString(16).substr(2)
      localStorage.setItem("token",token)
      valid = true
      
      const usuarioValido = {
        nome: usuario.nome
      }
      localStorage.setItem("usuarioValido",JSON.stringify(usuarioValido))
      window.location.replace("logado.html")
      event.preventDefault()
    }
  })
  if (nome.value.length >= 1 & senha.value.length >= 1 & valid == false) {
     msgErro()
     event.preventDefault()
   }
}
