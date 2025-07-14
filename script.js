document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
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

    // Image lazy loading and gallery enhancements
    const galleryImages = document.querySelectorAll('.gallery img');
    
    galleryImages.forEach(img => {
        // Add loading animation
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add click to expand functionality
        img.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
            this.style.zIndex = this.style.transform === 'scale(1.5)' ? '1000' : '1';
            this.style.transition = 'transform 0.3s ease, z-index 0s';
        });
    });

    // Contact form enhancement
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Re-enable after 3 seconds (form will likely redirect)
            setTimeout(() => {
                submitButton.textContent = 'Send';
                submitButton.disabled = false;
            }, 3000);
        });
    }

    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});