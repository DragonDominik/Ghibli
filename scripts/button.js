         // Updated JavaScript for enhanced firefly buttons
         document.addEventListener('DOMContentLoaded', function() {
            const navButtons = document.querySelectorAll('.nav-btn');
            
            // Convert buttons to enhanced version
            navButtons.forEach(button => {
                // Save original text
                const buttonText = button.textContent.trim();
                
                // Clear and rebuild button with nested elements
                button.innerHTML = `
                    <span class="btn-text">${buttonText}</span>
                    <div class="firefly-container"></div>
                    <div class="sparkle-container"></div>
                `;
                
                // Create fireflies
                const fireflyContainer = button.querySelector('.firefly-container');
                const fireflyCount = Math.floor(Math.random() * 5) + 12;
                
                for (let i = 0; i < fireflyCount; i++) {
                    const firefly = document.createElement('span');
                    firefly.classList.add('firefly');
                    
                    // Random position
                    const posX = Math.random() * 100;
                    const posY = Math.random() * 100;
                    firefly.style.left = `${posX}%`;
                    firefly.style.top = `${posY}%`;
                    
                    // Random animation delay and duration
                    firefly.style.animationDelay = `${Math.random() * 5}s`;
                    firefly.style.animationDuration = `${3 + Math.random() * 4}s`;
                    
                    // Random size
                    const size = 2 + Math.random() * 3;
                    firefly.style.width = `${size}px`;
                    firefly.style.height = `${size}px`;
                    
                    fireflyContainer.appendChild(firefly);
                }
                
                // Add click event
                button.addEventListener('click', function(e) {
                    // Create click ripple effect
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    this.appendChild(ripple);
                    
                    // Position ripple where clicked
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    // Create burst of sparkles
                    const sparkleContainer = this.querySelector('.sparkle-container');
                    for (let i = 0; i < 15; i++) {
                        createSparkle(sparkleContainer, x, y);
                    }
                    
                    // Remove ripple after animation completes
                    setTimeout(() => {
                        ripple.remove();
                    }, 800);
                });
            });
            
            // Function to create sparkles on click
            function createSparkle(container, x, y) {
                const sparkle = document.createElement('span');
                sparkle.classList.add('sparkle');
                
                // Position at click location
                sparkle.style.left = `${x}px`;
                sparkle.style.top = `${y}px`;
                
                // Random direction
                const angle = Math.random() * Math.PI * 2;
                const distance = 40 + Math.random() * 60;
                const duration = 0.6 + Math.random() * 0.8;
                
                // Set animation
                sparkle.style.setProperty('--angle', angle + 'rad');
                sparkle.style.setProperty('--distance', distance + 'px');
                sparkle.style.setProperty('--duration', duration + 's');
                
                container.appendChild(sparkle);
                
                // Remove after animation
                setTimeout(() => {
                    sparkle.remove();
                }, duration * 1000);
            }
        });