
// Captura o botão pelo ID
const meuBotao = document.getElementById("Clique Aqui");


// Função para ser executada quando o botão for clicado
function redirecioneParaMinhaPagina() {
    // Redireciona o usuário para minha página
    window.location.href = ""
};

// Define o evento de clique no botão
meuBotao.addEventListener("click", redirecioneParaMinhaPagina);