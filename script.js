document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.innerHTML = mainNav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Blog dropdown toggle for mobile
    const blogDropdownToggles = document.querySelectorAll('.blog-dropdown-toggle');
    
    blogDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                dropdown.classList.toggle('active');
                
                // Rotate chevron icon
                const icon = this.querySelector('i.fa-chevron-down');
                if (icon) {
                    icon.style.transform = dropdown.classList.contains('active') ? 
                        'rotate(180deg)' : 'rotate(0deg)';
                }
            }
        });
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                
                // Close any open blog dropdowns
                document.querySelectorAll('.blog-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });
    
    // Initialize all Splide sliders
    const sliders = document.querySelectorAll('.splide');
    sliders.forEach(slider => {
        new Splide(slider).mount();
    });
    
    // Rest of your existing JavaScript
});