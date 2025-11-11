document.getElementById("btnEntrar").addEventListener("click", fazerLogin);

function fazerLogin(){
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;

  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  const mensagem = document.getElementById("mensagem");

  if(usuario === usuarioCorreto && senha === senhaCorreta){
    window.location.href = "home.html";
  } else {
    mensagem.textContent = "Usuário ou senha incorretos!";
  }
}