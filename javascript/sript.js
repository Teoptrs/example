
window.onscroll = function() {
    const backToTopButton = document.getElementById('scrollup');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

document.getElementById('scrollup').onclick = function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};