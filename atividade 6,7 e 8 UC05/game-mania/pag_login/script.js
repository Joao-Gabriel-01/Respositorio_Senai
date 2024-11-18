$(document).ready(function () {
    // Verifica se o usuário está logado e exibe a imagem e nome
    function updateLoginSection() {
        const user = localStorage.getItem("user");
        if (user) {
            const userName = user;
            const userPhoto = "menina.png"; // Imagem fictícia do usuário
            $("#loginSection").html(`
                <div class="user-profile">
                    <img src="${userPhoto}" class="user-photo" alt="Foto do usuário">
                    <div class="user-name">
                        <span class="greeting">Bem-vindo</span>
                        <span class="username">${userName}</span>
                        <span id="logoutButton">Logoff</span> <!-- Botão de logoff -->
                    </div>
                </div>
            `);
			
			// Mostrar o botão de logoff quando o mouse passar sobre o nome ou foto
            $("#logoutButton").click(function () {
                // Remover o usuário do localStorage
                localStorage.removeItem("user");
                window.location.href = "index.html"; // Redirecionar para a página inicial
            });
        } else {
            $("#loginSection").html(`
                <a href="login.html" id="loginButton" class="button">Login</a>
            `);
        }
    }

    // Atualiza o loginSection em ambas as páginas
    updateLoginSection();

    // Funcionalidade de login
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();

        // Simulação de validação (substitua com validação real)
        if (username === "admin" && password === "1234") {
            localStorage.setItem("user", username);
            window.location.href = "index.html";
        } else {
            $("#loginMessage").text("Usuário ou senha incorretos.");
        }
    });

    // Configuração do carrossel
    let currentIndex = 0;
    const images = $(".carousel-image");
    const imageCount = images.length;

    function showNextImage() {
        images.eq(currentIndex).removeClass("active");
        currentIndex = (currentIndex + 1) % imageCount;
        images.eq(currentIndex).addClass("active");
    }

    // Alternar imagens a cada 3 segundos
    setInterval(showNextImage, 3000);

    // Funcionalidade do carrinho flutuante
    $(".cart").hover(
        function () {
            $(this).find(".cart-popup").show();
        },
        function () {
            $(this).find(".cart-popup").hide();
        }
    );

    // Clique no carrinho leva à página de carrinho
    $(".cart").click(function () {
        window.location.href = "cart.html";
    });
});

// Função para realizar a busca dos produtos
function searchProducts() {
    var input, filter, cards, cardTitle, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');
    
    for (i = 0; i < cards.length; i++) {
        cardTitle = cards[i].getElementsByClassName('card-title')[0];
        txtValue = cardTitle.textContent || cardTitle.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}