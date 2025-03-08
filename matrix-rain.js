document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.className = 'matrix-rain-container';
    document.body.insertBefore(container, document.body.firstChild);

    // Array of green color variations
    const colors = [
        '#00ff00', // Bright green
        '#00cc00', // Medium green
        '#009900', // Dark green
        '#33ff33', // Light green
        '#66ff66'  // Pale green
    ];

    function createRainDrop() {
        const drop = document.createElement('span');
        drop.className = 'matrix-rain';
        drop.style.left = Math.random() * 100 + '%';
        
        // Randomize fall speed between 1 and 3 seconds
        const duration = Math.random() * 2 + 1;
        drop.style.animationDuration = duration + 's';
        
        // Set random opacity between 0.6 and 1 for better visibility
        drop.style.opacity = Math.random() * 0.4 + 0.6;
        
        // Set random color from our green variations
        drop.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Extended character set with more Matrix-like symbols
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン♯≡∀∂∃∇∈∉∋∏∑√∝∞∟∠∥∧∨∩∪∫∮∴∵∶∷∽≈≌≒≠≡≤≥≦≧≪≫≬≭≮≯';
        drop.textContent = chars[Math.floor(Math.random() * chars.length)];
        
        // Set animation with easing for smoother motion
        drop.style.animation = `matrix-rain-fall ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        
        container.appendChild(drop);
        
        // Clean up the drop after animation
        drop.addEventListener('animationend', function() {
            drop.remove();
        });
    }

    // Create new drops more frequently for denser rain effect
    setInterval(createRainDrop, 25);

    // Create more initial drops with staggered timing
    for(let i = 0; i < 150; i++) {
        setTimeout(createRainDrop, Math.random() * 2000);
    }

    // Performance optimization: limit maximum drops
    setInterval(() => {
        if (container.children.length > 300) {
            const oldDrops = Array.from(container.children).slice(0, 50);
            oldDrops.forEach(drop => drop.remove());
        }
    }, 1000);
});