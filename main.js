window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if (nb) nb.classList.toggle('scrolled', window.scrollY > 10);
});
function toggleNav() { document.querySelector('.nav-links').classList.toggle('open'); }
document.addEventListener('DOMContentLoaded', () => {
    // Highlight active page
    const page = window.location.pathname.split('/').pop() || 'Home.html';
    document.querySelectorAll('.nav-links a:not(.nav-join)').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });
    // Fade-in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const obs = new IntersectionObserver(entries => {
                entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08 });
            document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
        });
    });
});
