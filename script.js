const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-message');

// usuário e senha de teste
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita recarregar a página

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === usuarioCorreto && pass === senhaCorreta) {
        window.location.href = "home.html"; // vai para outra tela
    } else {
        errorMsg.textContent = "Usuário ou senha incorretos!";
    }
});
