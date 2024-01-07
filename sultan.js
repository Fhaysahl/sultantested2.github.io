document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetPage = this.getAttribute('href');
            const currentPath = window.location.pathname;

            if (targetPage !== currentPath) {
                // Add a smooth fade out effect on the body
                document.body.style.opacity = 0;
                
                // Redirect to the target page after a delay
                setTimeout(function () {
                    window.location.href = targetPage;
                }, 500); // Adjust the delay as needed
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add a smooth fade in effect on the body when the new page loads
    document.body.style.opacity = 1;
});
