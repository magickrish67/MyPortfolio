document.addEventListener('DOMContentLoaded', function() {
    // Enable smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target element using the href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element's position
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset by Nav height
                    behavior: 'smooth'
                });
            }
        });
    });
});