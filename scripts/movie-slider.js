document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('movieSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.movie-item');
    
    // Calculate item width (including margin)
    const getItemWidth = () => {
        const item = items[0];
        const style = window.getComputedStyle(item);
        return item.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight) + 10; // 10 is for the gap
    };
    
    nextBtn.addEventListener('click', () => {
        const itemWidth = getItemWidth();
        slider.scrollLeft += itemWidth;
        
        // If at the end, loop back to start
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 50) {
            slider.scrollLeft = 0;
        }
    });
    
    prevBtn.addEventListener('click', () => {
        const itemWidth = getItemWidth();
        
        // If at the start, loop to end
        if (slider.scrollLeft <= 10) {
            slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
        } else {
            slider.scrollLeft -= itemWidth;
        }
    });
    
    // Update slider on window resize
    window.addEventListener('resize', () => {
        slider.scrollLeft = 0;
    });
    
    slider.style.scrollBehavior = 'smooth';
});
