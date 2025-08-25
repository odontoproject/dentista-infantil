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
        card.addEventListener('click', function () {
            // Remove flipped from other cards
            document.querySelectorAll('.feature-card').forEach(c => {
                if (c !== card) c.classList.remove('flipped');
            });
            // Toggle flipped on this card
            card.classList.toggle('flipped');
        });
    });
