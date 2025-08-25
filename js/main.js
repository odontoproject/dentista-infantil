function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
    // Feature card flip interaction
    document.querySelectorAll('.feature-card').forEach(card => {
        // Skip modal card
        if (card.classList.contains('modal-card')) return;
        card.addEventListener('click', function () {
            // Remove flipped from other cards
            document.querySelectorAll('.feature-card').forEach(c => {
                if (c !== card && !c.classList.contains('modal-card')) c.classList.remove('flipped');
            });
            // Toggle flipped on this card
            card.classList.toggle('flipped');
        });
    });

    // Modal for first visit guide
    document.addEventListener('DOMContentLoaded', function() {
        const firstVisitLink = document.getElementById('first-visit-link');
        const modal = document.getElementById('first-visit-modal');
        const closeModalBtn = document.getElementById('close-modal');
        if (firstVisitLink && modal && closeModalBtn) {
            firstVisitLink.addEventListener('click', function(e) {
                download("pdf/guia-primera-visita.pdf","guia-primera-visita.pdf")
                e.preventDefault();
                modal.style.display = 'flex';
            });
            closeModalBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            // Optional: close modal when clicking outside the card
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Prevent right-click and drag on all images
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
            });
            img.setAttribute('draggable', 'false');
        });
    });
// Function to download pdf
function download(url, filename) {
fetch(url).then(function(t) {
    return t.blob().then((b)=>{
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", filename);
        a.click();
    });
});
}