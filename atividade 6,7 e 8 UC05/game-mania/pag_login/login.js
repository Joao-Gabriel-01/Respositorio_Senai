$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        const username = $("#username").val();
        const password = $("#password").val();

        if (username === "admin" && password === "12345") {
            $("#loginMessage").text("Bem-vindo!").css("color", "green");

            // Armazena o usuário e redireciona para a página principal
            localStorage.setItem("user", username);
            setTimeout(() => window.location.href="", 1000);
        } else {
            $("#loginMessage").text("Usuário ou senha incorretos.").css("color", "red");
        }
    });
});