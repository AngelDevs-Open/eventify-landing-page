document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const hamburgerIcon = document.querySelector('.hamburguer-icon');
    const navLinks = document.querySelector('nav ul');
    const navLinksItems = document.querySelectorAll('nav ul li a');

    // Crear el menú móvil
    function createMobileMenu() {
        // Crear el elemento del menú móvil
        const mobileMenu = document.createElement('ul');
        mobileMenu.className = 'mobile-menu';

        // Clonar los elementos de navegación
        navLinksItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.textContent;

            // Añadir evento de clic para cerrar el menú al navegar
            a.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });

            li.appendChild(a);
            mobileMenu.appendChild(li);
        });

        // Añadir el menú móvil al body
        document.body.appendChild(mobileMenu);

        return mobileMenu;
    }

    const mobileMenu = createMobileMenu();

    // Toggle del menú hamburguesa
    hamburgerIcon.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.classList.toggle('active');
    });

    // Cerrar el menú móvil al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.hamburguer-icon') && !e.target.closest('.mobile-menu')) {
            mobileMenu.classList.remove('active');
        }
    });


});