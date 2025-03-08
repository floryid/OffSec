document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe tool sections
    document.querySelectorAll('.tool-section').forEach(section => {
        observer.observe(section);
    });

    // Observe tool cards with staggered delay
    document.querySelectorAll('.tool-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
});