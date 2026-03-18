document.addEventListener("DOMContentLoaded", () => {
    window.fade = function(event) {
        event.preventDefault();
        
        const destino = event.currentTarget.href;
        document.body.classList.add("fade-out");
        
        setTimeout(() => {
            window.location.href = destino;
        }, 500);
    };
});

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Opcional: Animação simples no ícone hambúrguer
        mobileMenu.classList.toggle("toggle");
    });
});

