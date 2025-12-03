document.addEventListener('DOMContentLoaded', function() {
    
    // Create an observer that detects when elements enter the screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add the class that triggers the animation
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Tell the observer to watch all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        observer.observe(section);
    });

});
