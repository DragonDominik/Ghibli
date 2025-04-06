document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let currentMovieIndex = 0;
    
    // DOM elements
    const movieTitle = document.getElementById('movieTitle');
    const movieYearLength = document.getElementById('movieYearLength');
    const movieGenre = document.getElementById('movieGenre');
    const movieDescription = document.getElementById('movieDescription');
    const movieThemes = document.getElementById('movieThemes');
    const movieDirector = document.getElementById('movieDirector');
    const movieStudio = document.getElementById('movieStudio');
    const movieLength = document.getElementById('movieLength');
    const movieAwards = document.getElementById('movieAwards');
    const rottenTomatoes = document.getElementById('rottenTomatoes');
    const imdbRating = document.getElementById('imdbRating');
    const moviePoster = document.getElementById('moviePoster');
    const trailerVideo = document.getElementById('trailerVideo');
    const trailerOverlay = document.getElementById('trailerOverlay');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Get movie index from URL or default to 0
    function getMovieIndexFromURL() {
        const params = new URLSearchParams(window.location.search);
        const movieParam = params.get('movie');
        if (movieParam) {
            const index = movies.findIndex(m => m.title.toLowerCase().replace(/ /g, '-') === movieParam);
            return index >= 0 ? index : 0;
        }
        return 0;
    }
    
    // Update URL with current movie
    function updateURL() {
        const movieSlug = movies[currentMovieIndex].title.toLowerCase().replace(/ /g, '-');
        const newUrl = `${window.location.pathname}?movie=${movieSlug}`;
        window.history.pushState({}, '', newUrl);
    }
    
    // Update movie display
    function displayMovie(index) {
        currentMovieIndex = index;
        const movie = movies[index];
        
        // Update text content
        document.title = `${movie.title} | Studio Ghibli`;
        movieTitle.textContent = movie.title;
        movieYearLength.textContent = `${movie.year} · ${movie.length}`;
        movieGenre.textContent = movie.genre;
        movieDescription.textContent = movie.description;
        movieThemes.textContent = movie.themes;
        movieDirector.textContent = movie.director;
        movieStudio.textContent = movie.studio;
        movieAwards.textContent = movie.awards;
        rottenTomatoes.textContent = movie.rottenTomatoes;
        imdbRating.textContent = movie.imdb;
        
        // Update images
        moviePoster.src = movie.poster;
        moviePoster.alt = `${movie.title} poster`;
        
        // Update video source
        trailerVideo.pause();
        trailerVideo.src = movie.trailer;
        trailerVideo.load();
        trailerVideo.muted = true;
        trailerVideo.play();
        
        // Reset trailer overlay
        trailerOverlay.style.display = 'flex';
        
        // Update URL
        updateURL();
    }
    
    // Navigation buttons
    prevBtn.addEventListener('click', function() {
        currentMovieIndex = (currentMovieIndex - 1 + movies.length) % movies.length;
        displayMovie(currentMovieIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentMovieIndex = (currentMovieIndex + 1) % movies.length;
        displayMovie(currentMovieIndex);
    });
    
    // Trailer overlay click event
    trailerOverlay.addEventListener('click', function() {
        // Enable sound and controls
        trailerVideo.muted = false;
        trailerVideo.controls = true;
        
        // Hide the overlay
        trailerOverlay.style.display = 'none';
        
        // Start from beginning with sound
        trailerVideo.currentTime = 0;
        trailerVideo.play();
    });
    
    // Reset trailer when video ends
    trailerVideo.addEventListener('ended', function() {
        // Show overlay again
        trailerOverlay.style.display = 'flex';
        
        // Reset to silent autoplay
        trailerVideo.muted = true;
        trailerVideo.controls = false;
        trailerVideo.play();
    });
    
    // Handle browser back/forward navigation
    window.addEventListener('popstate', function() {
        currentMovieIndex = getMovieIndexFromURL();
        displayMovie(currentMovieIndex);
    });
    
    // Initial display
    currentMovieIndex = getMovieIndexFromURL();
    displayMovie(currentMovieIndex);
});