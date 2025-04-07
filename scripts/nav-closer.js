document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    
    const navbarCollapse = document.getElementById('navbarNav');
    
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    function closeNavbar() {
        if (window.innerWidth < 1001 && navbarCollapse.classList.contains('show')) {
            if (typeof bootstrap !== 'undefined') {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                } else {
                    navbarCollapse.classList.remove('show');
                }
            } else {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        }
    }
    

    navLinks.forEach(function(link) {
        link.addEventListener('click', closeNavbar);
    });

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', closeNavbar);
    });
});