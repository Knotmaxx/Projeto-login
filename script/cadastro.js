const btn = document.querySelector(".cadastro__btn")

const eyeInput = document.querySelector("#cadastro__eye1")
const eyeInput2 = document.querySelector("#cadastro__eye2")

const containerMsg = document.querySelector(".cadastro__c-msg")
const msg = document.querySelector(".cadastro__msg")

const nome = document.querySelector("#nome")
const labelNome = document.querySelector("#labelNome")
const campoNome = document.querySelector("#campoNome")

const usuario = document.querySelector("#usuario")
const labelUsuario = document.querySelector("#labelUsuario")
const campoUsuario = document.querySelector("#campoUsuario")

const senha = document.querySelector("#senha")
const labelSenha = document.querySelector("#labelSenha")
const campoSenha = document.querySelector("#campoSenha")

const confirmarSenha = document.querySelector("#confirmarSenha")
const labelConfirmar = document.querySelector("#labelConfirmar")
const campoConfirmar = document.querySelector("#campoConfirmar")

btn.addEventListener("click",cadastrar)

nome.addEventListener("keyup",() =>{
  verificarNomes(labelNome,nome,campoNome)
})
usuario.addEventListener("keyup",() =>{
  verificarNomes(labelUsuario,usuario,campoUsuario)
})
senha.addEventListener("keyup",verificarSenha)
confirmarSenha.addEventListener("keyup",senhaConfirmar)

eyeInput.addEventListener("click", () => {
  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text")
  } else {
    senha.setAttribute("type", "password")
  }
})

eyeInput2.addEventListener("click", () => {
  if (confirmarSenha.getAttribute("type") == "password") {
    confirmarSenha.setAttribute("type", "text")
  } else {
    confirmarSenha.setAttribute("type", "password")
  }
})

function verificarNomes(labels,inputs,campo){
  if (inputs.value.length == 0){
    labels.setAttribute("style","color: lightslategray")
    campo.setAttribute("style", "border-bottom-color: black")
    if (labels.innerHTML.includes("Nome")) {
      labels.innerHTML = "Nome"
    } else {
      labels.innerHTML = "Usuário"
    }
    
  }
  else if (inputs.value.length < 4) {
    labels.setAttribute("style", "color: red")
    campo.setAttribute("style", " border-bottom-color: red")
    if(labels.innerHTML == "Nome"){
      labels.innerHTML = "Nome <span>Insira no mínimo 4 caracteres</span>"
    }else if(labels.innerHTML == "Usuario"){
      labels.innerHTML = "Usuário <span>Insira no mínimo 4 caracteres</span>"
    }
  }else{
    labels.setAttribute("style", "color: green")
    campo.setAttribute("style", " border-bottom-color: green")
    if (labels.innerHTML.includes("Nome")) {
      labels.innerHTML = "Nome"
    }else{
      labels.innerHTML = "Usuário"
    }
  }
}
function verificarSenha(){
  if (senha.value.length == 0) {
    labelSenha.setAttribute("style", "color: lightslategray")
    campoSenha.setAttribute("style"," border-bottom-color: black")
    labelSenha.innerHTML = "Senha"
  }
  else if(senha.value.length < 8) {
    labelSenha.setAttribute("style", "color: red")
    campoSenha.setAttribute("style"," border-bottom-color: red")
    labelSenha.innerHTML = "Usuário <span>Insira no mínimo 8 caracteres.</span>"
    
  }else{
    labelSenha.setAttribute("style", "color: green")
    campoSenha.setAttribute("style"," border-bottom-color: green")
    labelSenha.innerHTML = "Senha"
  }
  senhaConfirmar()
}
function senhaConfirmar(){
  if(confirmarSenha.value.length == 0 ){
    labelConfirmar.setAttribute("style", "color: lightslategray")
    campoConfirmar.setAttribute("style", " border-bottom-color: black")
    labelConfirmar.innerHTML = "Confirmar Senha"
  }else if(confirmarSenha.value !=  senha.value){
    labelConfirmar.setAttribute("style", "color: red")
    campoConfirmar.setAttribute("style", " border-bottom-color: red")
    labelConfirmar.innerHTML = "Confirmar Senha <span>As Senhas não condicem</span>"
  }else{
    labelConfirmar.setAttribute("style", "color: green")
    campoConfirmar.setAttribute("style", " border-bottom-color: green")
    labelConfirmar.innerHTML = "Confirmar Senha"
  }
}


function msgErro(mensagem = "Preença os campos corretamente"){
  containerMsg.setAttribute("style", "display:flex")
  msg.setAttribute("style", "background-color:red")
  msg.innerHTML = mensagem
}

function msgSuccess(){
  containerMsg.setAttribute("style", "display:flex")
  document.querySelector(".cadastro__fieldset").setAttribute("style", "padding-bottom:0px")
  msg.setAttribute("style", "background-color:green")
  msg.innerHTML = "Cadastro Concluido. Seja bem Vindo."
}

function verificarNomesRepetidos(lista){
  const nomeRepetido = lista.find( (lista) => lista.nome === nome.value)
  if ( nomeRepetido === undefined){
    lista.push({
      nome: DOMPurify.sanitize(nome.value),
      usuario: DOMPurify.sanitize(usuario.value),
      senha: DOMPurify.sanitize(senha.value)
    })
    localStorage.setItem("usuarios", JSON.stringify(lista))
    msgSuccess()
    setTimeout(() =>{
         window.history.back()
       },800)
    event.preventDefault()
  }else{
    msgErro("Nome de usuário já existente")
    event.preventDefault()
  }
}       

function cadastrar(event){
  if(labelNome.style.color == "green" & labelUsuario.style.color == "green" 
  & labelSenha.style.color == "green" & labelConfirmar.style.color == "green"){
   event.preventDefault()  
   const listaUser = JSON.parse(localStorage.getItem("usuarios") || "[]")
   verificarNomesRepetidos(listaUser)
   
  }else if(nome.value.length >= 1 & usuario.value.length >= 1 
   & senha.value.length >= 1 ){
    msgErro()
    event.preventDefault()
  }
}
