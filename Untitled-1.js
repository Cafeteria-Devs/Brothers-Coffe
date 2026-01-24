document.addEventListener("DOMContentLoaded", () => {
        const linksCardapio = document.querySelectorAll('a[href="abas/cardapio.html"]');

    linksCardapio.forEach(link => {
        link.addEventListener('click', function(event) {
                     event.preventDefault();
            
                       const destino = this.href;

            
            document.body.classList.add('fade-out');

                       setTimeout(() => {
                window.location.href = destino;
            }, 500);
        });
    });
})