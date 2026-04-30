// Seleção de elementos do DOM
const btnTop = document.querySelector("#back-to-top");
const contactForm = document.querySelector("#contact-form");

// Função para controlar a exibição do botão ao rolar a página
function handleScroll() {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

// Função para rolar até o topo com comportamento suave
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Adição de Event Listeners
window.addEventListener("scroll", handleScroll);

if (btnTop) {
    btnTop.addEventListener("click", scrollToTop);
}

// Evento de submissão de formulário
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        // Exemplo de função para prevenir o comportamento padrão e validar
        console.log("Formulário enviado com sucesso!");
    });
}