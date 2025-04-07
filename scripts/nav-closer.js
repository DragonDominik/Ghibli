document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Function to close the navbar
    function closeNavbar() {
        if (window.innerWidth <= 990) { // Match your mobile breakpoint
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            
            // Also close any open dropdown menus
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    }

    // Close navbar when clicking regular nav links
    document.querySelectorAll('.nav-item:not(.dropdown) .nav-link').forEach(link => {
        link.addEventListener('click', closeNavbar);
    });

    // Close navbar when clicking dropdown items (Ghibli Museum/Park)
    dropdownItems.forEach(item => {
        item.addEventListener('click', closeNavbar);
    });

    // Handle dropdown toggle click
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 990) {
                e.preventDefault();
                e.stopPropagation();
                const dropdownMenu = this.nextElementSibling;
                
                // Toggle the dropdown
                if (dropdownMenu.style.display === 'block') {
                    dropdownMenu.style.display = 'none';
                } else {
                    // Hide any other open dropdowns first
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.style.display = 'none';
                        }
                    });
                    dropdownMenu.style.display = 'block';
                }
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 990) {
            if (!e.target.closest('.dropdown') && !e.target.closest('.navbar-toggler')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        }
    });
});
