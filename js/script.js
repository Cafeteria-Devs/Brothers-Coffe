document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            mobileMenu.classList.toggle("toggle");
            
            if (navLinks.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "initial";
            }
        });

        const navItems = document.querySelectorAll(".nav-links a");
        navItems.forEach(item => {
            item.addEventListener("click", (e) => {
                navLinks.classList.remove("active");
                mobileMenu.classList.remove("toggle");
                document.body.style.overflow = "initial";
            });
        });
    }

    window.fade = function(event) {
        event.preventDefault();
        const destino = event.currentTarget.href;
        
        document.body.classList.add("fade-out");
        
        setTimeout(() => {
            window.location.href = destino;
        }, 500);
    };
});
