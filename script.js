// Initialize Splide Slider
document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    new Splide('.splide', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pauseOnHover: false,
        arrows: false,
        pagination: false
    }).mount();
    
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Animate Elements on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.flash-animate');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('show');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Start counters when about section is in view
    const aboutSection = document.querySelector('.flash-about');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.unobserve(aboutSection);
        }
    });
    
    observer.observe(aboutSection);
    
    // Mobile Menu Toggle (if needed)
    const hamburger = document.createElement('div');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.className = 'mobile-menu-toggle';
    hamburger.style.display = 'none';
    document.body.appendChild(hamburger);
    
    function checkMobileMenu() {
        if (window.innerWidth < 768) {
            hamburger.style.display = 'flex';
            document.querySelector('.flash-nav').style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            document.querySelector('.flash-nav').style.display = 'block';
        }
    }
    
    hamburger.addEventListener('click', function() {
        const nav = document.querySelector('.flash-nav');
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });
    
    window.addEventListener('resize', checkMobileMenu);
    checkMobileMenu();
});