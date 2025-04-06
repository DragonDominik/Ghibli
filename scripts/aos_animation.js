document.addEventListener("DOMContentLoaded", () => {
    // Exclude navbar, carousel, movieslider and their children from AOS animations
    document.querySelectorAll("div *:not(b):not(i):not(header *):not(span *):not(#imageCarousel *):not(#imageCarousel):not(.movieslider *):not(.movieslider)").forEach(el => {
        el.setAttribute("data-aos", "fade-up");
    });
    
    AOS.init({offset:0});
});