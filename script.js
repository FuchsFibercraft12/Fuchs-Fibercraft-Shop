// ===== PARTICLE BACKGROUND =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
        25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        50% { transform: translateY(-40px) translateX(-10px); opacity: 0.8; }
        75% { transform: translateY(-20px) translateX(20px); opacity: 0.6; }
    }
`;
document.head.appendChild(style);

createParticles();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== BUTTON CLICK EFFECTS =====
const buttons = document.querySelectorAll('.cta-button, .buy-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(0, 217, 255, 0.8)';
        ripple.style.borderRadius = '50%';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple-effect 0.6s ease-out';

        this.style.position = 'relative';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        alert('✨ Danke für deinen Besuch! Klick auf Discord oder PayPal um mich zu kontaktieren! 🔥');
    });
});

// Ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-effect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade in up animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeStyle);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// ===== MOUSE FOLLOW EFFECT =====
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const neonBorder = document.querySelector('.neon-border');
    if (neonBorder) {
        neonBorder.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px) rotate(${360 * mouseX}deg)`;
    }
});

console.log('🔥 FuchsFibercraft Shop Website Loaded! 🔥');


// ===== SITE-WIDE BLINKING FOR TEXTS & NUMBERS =====
// This injects a small CSS snippet that makes textual elements (and thus numbers inside them) blink.
// If you want a different speed, change the '1s' duration below or the steps() timing function.
const blinkStyle = document.createElement('style');
blinkStyle.textContent = `
/* Blink animation for text and numbers */
@keyframes blinkText {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Apply to common textual elements so images/icons are not affected */
p, h1, h2, h3, h4, h5, h6, a, span, li, label, strong, em, .subtitle, .logo, .section-title, .product-card h3, .product-card .price, .nav-links a, .footer p, .social-link, .product-image {
  animation: blinkText 1s steps(1,end) infinite;
}

/* Allow opt-out on specific elements by adding class 'no-blink' */
.no-blink { animation: none !important; opacity: 1 !important; }
`;
document.head.appendChild(blinkStyle);
