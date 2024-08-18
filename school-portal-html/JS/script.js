// js/scripts.js
document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
});
