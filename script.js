// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    /* ACTIVE NAV LINK */
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });


    /* BUTTON NAVIGATION */
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (nextBtn && nextBtn.dataset.link) {
        nextBtn.addEventListener("click", function () {
            window.location.href = this.dataset.link;
        });
    }

    if (prevBtn && prevBtn.dataset.link) {
        prevBtn.addEventListener("click", function () {
            window.location.href = this.dataset.link;
        });
    }


    /* 3. KEYBOARD NAVIGATION */
    document.addEventListener("keydown", function (e) {

        // Ignore typing inside input/textarea
        const tag = document.activeElement.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;

        if (e.key === "ArrowRight" && nextBtn && nextBtn.dataset.link) {
            window.location.href = nextBtn.dataset.link;
        }

        if (e.key === "ArrowLeft" && prevBtn && prevBtn.dataset.link) {
            window.location.href = prevBtn.dataset.link;
        }
    });

});