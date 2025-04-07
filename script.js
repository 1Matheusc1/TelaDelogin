function toggleSenha(id) {
  const campo = document.getElementById(id);
  campo.type = campo.type === "password" ? "text" : "password";
}
document
  .getElementById("form-cadastro")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha-cadastro").value,
    };
    localStorage.setItem("usuario", JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
document.getElementById("form-login")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;
  const user = JSON.parse(localStorage.getItem("usuario"));
  if (user && user.email === email && user.senha === senha) {
    alert("Login bem-sucedido!");
  } else {
    alert("Email ou senha inválidos!");
  }
});
