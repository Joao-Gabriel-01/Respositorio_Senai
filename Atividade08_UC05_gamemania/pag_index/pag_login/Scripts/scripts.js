function register() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario && senha) {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('senha', senha);
        alert('Usuário cadastrado com sucesso!');
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function login() {
    const usuario = document.getElementsByName('usuario')[0].value;
    const senha = document.getElementsByName('senha')[0].value;

    const storedUsuario = localStorage.getItem('usuario');
    const storedSenha = localStorage.getItem('senha');

    if (usuario === storedUsuario && senha === storedSenha) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', usuario);
        alert('Login bem-sucedido!');
        window.location.href = "../game-mania/index_gm.html"; // Redirecionar para a página principal
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    alert('Logout realizado com sucesso!');
    window.location.href = "/pag_login/index.html"; // Redirecionar para a página de login
}