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

    const userModal = document.getElementById("desktop-user-modal");
    const userLink = document.getElementById("desktop-user-link");
    const closeBtn = document.getElementById("desktop-user-modal-close");
    const logoutBtn = document.getElementById("desktop-user-logout");

    if (userLink && userModal) {
        userLink.addEventListener("click", (e) => {
            e.preventDefault();
            userModal.classList.add("active");
            userModal.removeAttribute("aria-hidden");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeBtn && userModal) {
        closeBtn.addEventListener("click", () => {
            userModal.classList.remove("active");
            userModal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "initial";
        });
    }

    if (userModal) {
        userModal.addEventListener("click", (e) => {
            if (e.target === userModal) {
                userModal.classList.remove("active");
                userModal.setAttribute("aria-hidden", "true");
                document.body.style.overflow = "initial";
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            userModal.classList.remove("active");
            userModal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "initial";
            alert("Você saiu (simulação). Redirecionando para página de login.");
            window.location.href = "/pages/login.html";
        });
    }
});
