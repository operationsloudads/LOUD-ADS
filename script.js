document.addEventListener('DOMContentLoaded', () => {
    // Services Data
    const services = [
        { name: 'Rental Hoarding Spaces', icon: '🏢' },
        { name: 'Own Hoarding for Clients', icon: '🖼️' },
        { name: 'Mini Hoardings', icon: '🪧' },
        { name: 'Pole Boards', icon: '📍' },
        { name: 'Innovative Billboards', icon: '💡' },
        { name: 'Signages', icon: '🏷️' },
        { name: 'Vinyl Stickering', icon: '📜' },
        { name: 'Dealer Boards', icon: '🏪' },
        { name: 'LED Name/Letter Works', icon: '✨' },
        { name: 'Flex Tying', icon: '📐' },
        { name: 'Acrylic Light Boards', icon: '🔮' },
        { name: 'Backlit Flex - Light Boards', icon: '🔆' },
        { name: 'Ad Space Maintenance', icon: '🛠️' }
    ];

    const servicesGrid = document.querySelector('.services-grid');

    if (servicesGrid) {
        services.forEach((service, index) => {
            const delayClass = `delay-${(index % 3) + 1}`; // For staggered animation
            const serviceCard = document.createElement('div');
            serviceCard.className = `service-card fade-in-up ${delayClass}`;
            serviceCard.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <div class="service-name">${service.name}</div>
            `;
            servicesGrid.appendChild(serviceCard);
        });
    }

    // Clients Data
    const clients = [
        "HiLITE Mall", "Preethi Silks", "JOCKEY", "Amul", "U.S. POLO ASSN.",
        "FOSSIL", "MYOP", "Pizza Hut", "R&B", "purplle", "MOUZY",
        "Yummy Fried Chicken", "SHAASHOPY", "Nattu Ruchi", "Phone Case",
        "ICE MAGIC", "Almaaz Shawarma", "ESTHARA JEWELS", "ARROW", "WOW! MOMO",
        "WOW! CHINA", "19:46", "my specx"
    ];

    const clientsGrid = document.querySelector('.clients-grid');

    if (clientsGrid) {
        clients.forEach((client, index) => {
            const delayClass = `delay-${(index % 3) + 1}`;
            const clientCard = document.createElement('div');
            clientCard.className = `client-card fade-in-up ${delayClass}`;
            clientCard.innerHTML = `<span>${client}</span>`;
            clientsGrid.appendChild(clientCard);
        });
    }

    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            // Transform hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.fade-in-up, .slide-in-right');
    animateElements.forEach(el => observer.observe(el));

    // WhatsApp Form Submission
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('waName').value.trim();
            const company = document.getElementById('waCompany').value.trim();
            const message = document.getElementById('waMessage').value.trim();
            
            let whatsappMessage = `Hi LOUD ADS! My name is ${name}.`;
            if (company) {
                whatsappMessage += ` I'm from ${company}.`;
            }
            whatsappMessage += `\n\n${message}`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappNumber = "919744464997";
            
            // Open WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        });
    }
});
