// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
    });
});

// Fade-in Animation เมื่อโหลดหน้า
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Hover effect เพิ่มประกาย
const cards = document.querySelectorAll(".movie-card");
cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0 8px 25px rgba(255,150,200,0.5)";
    });
    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "";
    });
});