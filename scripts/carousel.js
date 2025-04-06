document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', function (e) {
        if (!e.target.closest('.carousel-control')) {
            const link = this.querySelector('a');
            if (link) window.location.href = link.href;
        }
    });
});