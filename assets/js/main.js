// ============================================
// Workly - Desktop Mate Website
// JavaScript pour animations et interactions
// ============================================

// === INITIALISATION ===
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
});

// === NAVIGATION SCROLLÉE ===
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// === ANIMATIONS AU SCROLL ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Option : ne déclencher l'animation qu'une seule fois
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Observer les cartes avec délai en cascade
    const cards = document.querySelectorAll('.card, .feature-item');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observer les cartes de phases (délai plus court)
    const phaseCards = document.querySelectorAll('.endpoint-card');
    phaseCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(card);
    });
}

// === MENU MOBILE ===
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Ignorer les liens vides ou juste "#"
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === COPIER URL DANS CLIPBOARD ===
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Créer une notification de succès
        showNotification('URL copiée dans le presse-papier ! ✅');
    }).catch(err => {
        console.error('Erreur lors de la copie:', err);
        showNotification('Erreur lors de la copie ❌', 'error');
    });
}

// === NOTIFICATION SYSTÈME ===
function showNotification(message, type = 'success') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles inline pour la notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '1rem 2rem',
        background: type === 'success' ? '#4ecca3' : '#ff6b9d',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        zIndex: '9999',
        animation: 'slideIn 0.3s ease',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ajouter les animations CSS pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === EFFET PARALLAX LÉGER ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    
    parallaxElements.forEach((el, index) => {
        const speed = index === 0 ? 0.5 : 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// === UTILITAIRES POUR LES PAGES API ===
if (document.querySelector('.endpoint-card')) {
    // Ajouter un bouton de copie à chaque URL
    const urlElements = document.querySelectorAll('.endpoint-card .url');
    
    urlElements.forEach(urlElement => {
        // Créer le bouton de copie
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋 Copier';
        copyBtn.className = 'copy-btn';
        
        Object.assign(copyBtn.style, {
            marginTop: '10px',
            padding: '0.5rem 1rem',
            background: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
        });
        
        copyBtn.addEventListener('mouseover', () => {
            copyBtn.style.background = 'var(--primary-light)';
            copyBtn.style.transform = 'scale(1.05)';
        });
        
        copyBtn.addEventListener('mouseout', () => {
            copyBtn.style.background = 'var(--primary-color)';
            copyBtn.style.transform = 'scale(1)';
        });
        
        copyBtn.addEventListener('click', () => {
            const url = urlElement.textContent.trim();
            copyToClipboard(url);
        });
        
        urlElement.parentElement.appendChild(copyBtn);
    });
}

// === EASTER EGG (optionnel - clic sur le logo) ===
const logo = document.querySelector('.navbar .logo');
if (logo) {
    let clickCount = 0;
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        clickCount++;
        
        if (clickCount === 5) {
            showNotification('Kira vous salue ! 💜', 'success');
            clickCount = 0;
            
            // Petit effet visuel sur toute la page
            document.body.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 500);
        }
    });
}

// Animation pulse pour l'easter egg
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(pulseStyle);

console.log('🎭 Workly Website - Loaded successfully! 💜');
