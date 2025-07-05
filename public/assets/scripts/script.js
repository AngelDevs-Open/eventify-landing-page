document.addEventListener('DOMContentLoaded', function() {
    // Elements of DOM
    const hamburgerIcon = document.querySelector('.hamburguer-icon');
    const navLinks = document.querySelector('nav ul');
    const navLinksItems = document.querySelectorAll('nav ul li a');

    // Create the menu mobile
    function createMobileMenu() {
        // Create the mobile menu container
        const mobileMenu = document.createElement('ul');
        mobileMenu.className = 'mobile-menu';

        // Clone the elements from the navigation links
        navLinksItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.textContent;

            // Add click event to close the menu when a link is clicked
            a.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });

            li.appendChild(a);
            mobileMenu.appendChild(li);
        });

        // Add the menu mobile to the body
        document.body.appendChild(mobileMenu);

        return mobileMenu;
    }

    const mobileMenu = createMobileMenu();

    // Toggle the mobile menu when the hamburger icon is clicked
    hamburgerIcon.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.classList.toggle('active');
    });

    // Close the mobile menu when clicking outside of it
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.hamburguer-icon') && !e.target.closest('.mobile-menu')) {
            mobileMenu.classList.remove('active');
        }
    });
// Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation for the navigation links plans
    const planCards = document.querySelectorAll('.plan-card');

    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Anmation for the call-to-action buttons
    const ctaButtons = document.querySelectorAll('.btn-action, .plan-card-btn');

    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add a scroll effect to the navigation bar
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');

        if (window.scrollY > 100) {
            nav.style.backgroundColor = '#1C2541';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            nav.style.transition = 'all 0.3s ease';
        } else {
            nav.style.backgroundColor = '#3A506B';
            nav.style.boxShadow = 'none';
        }
    });

    // Add highlight effect to the active navigation element based on the visible section
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#6FFFE9';
                link.style.fontWeight = '600';
            } else {
                link.style.color = '';
                link.style.fontWeight = '';
            }
        });

        // Refresh the mobile menu links
        document.querySelectorAll('.mobile-menu li a').forEach(link => {
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#6FFFE9';
                link.style.fontWeight = '600';
            } else {
                link.style.color = '';
                link.style.fontWeight = '';
            }
        });
    });

    // Add a loading effect at the start of the page
    function addPageLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
             <div class="loader-content">
                 <img src="/public/assets/images/eventify-logo.png" alt="Eventify Logo" />
                 <div class="loader-spinner"></div>
             </div>
         `;

        document.body.appendChild(loader);

        // Add styles for the loader
        const loaderStyle = document.createElement('style');
        loaderStyle.textContent = `
             .page-loader {
                 position: fixed;
                 top: 0;
                 left: 0;
                 width: 100%;
                 height: 100%;
                 background-color: #1C2541;
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 z-index: 9999;
                 transition: opacity 0.5s ease;
             }
             
             .loader-content {
                 display: flex;
                 flex-direction: column;
                 align-items: center;
             }
             
             .loader-content img {
                 max-width: 200px;
                 margin-bottom: 20px;
             }
             
             .loader-spinner {
                 width: 50px;
                 height: 50px;
                 border: 5px solid rgba(111, 255, 233, 0.3);
                 border-radius: 50%;
                 border-top-color: #6FFFE9;
                 animation: spin 1s ease-in-out infinite;
             }
             
             @keyframes spin {
                 to { transform: rotate(360deg); }
             }
         `;
        document.head.appendChild(loaderStyle);

        // Hide the loader after the page loads
        window.addEventListener('load', function() {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // Execute the function to add the loader
    addPageLoader();

    // Add scroll animations to elements
    function addScrollAnimations() {
        const elementsToAnimate = [
            ...document.querySelectorAll('h2'),
            ...document.querySelectorAll('.benefits-card'),
            ...document.querySelectorAll('.function-card'),
            ...document.querySelectorAll('.plan-card'),
            ...document.querySelectorAll('.profile-item'),
            ...document.querySelectorAll('.startup-profile')
        ];

        // Add initial styles for the elements to animate
        elementsToAnimate.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Function to check if an element is in the viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
            );
        }

        // Function to animate elements when they are in the viewport
        function animateElementsOnScroll() {
            elementsToAnimate.forEach(element => {
                if (isElementInViewport(element)) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Execute the animation when scrolling
        window.addEventListener('scroll', animateElementsOnScroll);

        // Execute the animation on page load
        setTimeout(animateElementsOnScroll, 100);
    }

    // Execute the function to add scroll animations
    addScrollAnimations();

    // Add click event to the social media icons in the footer
    const socialIcons = document.querySelectorAll('.footer-social-networks i');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const socialLinks = {
                'fa-x-twitter': 'https://twitter.com',
                'fa-instagram': 'https://instagram.com',
                'fa-youtube': 'https://youtube.com',
                'fa-github': 'https://github.com'
            };

            for (const socialClass in socialLinks) {
                if (this.classList.contains(socialClass)) {
                    window.open(socialLinks[socialClass], '_blank');
                    break;
                }
            }
        });
    });

    // Detect current language by file name
    const path = window.location.pathname;
    const isSpanish = path.includes('index-es.html');

    const btnES = document.getElementById('btn-es');
    const btnEN = document.getElementById('btn-en');

    if (isSpanish) {
        btnES.classList.add('active');
        btnEN.classList.remove('active');
    } else {
        btnEN.classList.add('active');
        btnES.classList.remove('active');
    }

    btnES.addEventListener('click', () => {
        if (!isSpanish) {
            window.location.href = 'index-es.html';
        }
    });

    btnEN.addEventListener('click', () => {
        if (isSpanish) {
            window.location.href = 'index.html';
        }
    });

});