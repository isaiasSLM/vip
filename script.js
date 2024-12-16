// Função para alternar a visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Função para fechar o menu
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
}
