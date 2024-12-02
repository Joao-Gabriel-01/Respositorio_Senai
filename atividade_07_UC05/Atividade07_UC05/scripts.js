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
        alert('Login bem-sucedido!');
        window.location.href = 'welcome.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
}