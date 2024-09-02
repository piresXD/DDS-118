function logar(){
   var login = document.getElementById('inputUsuario').value
   var senha = document.getElementById('inputSenha').value

   if(login == "admin" && senha == "admin"){
    location.href = "home.html"
    alert('login realizado com sucesso !')
   }
   else{
    alert('Usuário ou senha incorreto')
   }
}

function cadastrar(){
   var Usuario = document.getElementById('inputUsuarioNovo').value
   var email = document.getElementById('inputEmailNovo').value
   var senha = document.getElementById('inputSenhaNovo').value
   var ConfirmaSenha = document.getElementById('inputSenhaConfirme').value

   var emailCerto = emailValido(email)

   if(emailCerto){
      if(senha === ConfirmaSenha){
         location.href = "index.html"
         alert("Olá" + Usuario + ", seja bem vindo! ")
      }
      else{
         alert('As senha não coincidem')
      }
   }
   else{
      alert("Este email não e válido")
   }
}

function emailValido(email){
   return email.includes('@')
}