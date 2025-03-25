// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality for Impressum, Datenschutz, and AGB
    const impressumLink = document.getElementById('impressumLink');
    const datenschutzLink = document.getElementById('datenschutzLink');
    const agbLink = document.getElementById('agbLink');
    
    const impressumModal = document.getElementById('impressumModal');
    const datenschutzModal = document.getElementById('datenschutzModal');
    const agbModal = document.getElementById('agbModal');
    
    const closeButtons = document.querySelectorAll('.close');
    
    // Open modals
    if (impressumLink && impressumModal) {
        impressumLink.addEventListener('click', function(e) {
            e.preventDefault();
            impressumModal.style.display = 'block';
        });
    }
    
    if (datenschutzLink && datenschutzModal) {
        datenschutzLink.addEventListener('click', function(e) {
            e.preventDefault();
            datenschutzModal.style.display = 'block';
        });
    }
    
    if (agbLink && agbModal) {
        agbLink.addEventListener('click', function(e) {
            e.preventDefault();
            agbModal.style.display = 'block';
        });
    }
    
    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            impressumModal.style.display = 'none';
            datenschutzModal.style.display = 'none';
            agbModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === impressumModal) {
            impressumModal.style.display = 'none';
        }
        if (e.target === datenschutzModal) {
            datenschutzModal.style.display = 'none';
        }
        if (e.target === agbModal) {
            agbModal.style.display = 'none';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
            contactForm.reset();
        });
    }

    // Add active class to navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            if (window.pageYOffset >= sectionTop - navbarHeight - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
