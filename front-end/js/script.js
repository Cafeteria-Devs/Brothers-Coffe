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
