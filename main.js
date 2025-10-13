const servicesSection = document.getElementById('services');
const learnMoreBtn = document.getElementById('learn-more');

const navLinksContainer = document.querySelector('.nav-links-container');

learnMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    servicesSection.scrollIntoView({
        behavior: "smooth",
        top: -10
    })
})

navLinksContainer.addEventListener('click', function(e) {
    const navLink = e.target.closest('.nav-link');

    if(!navLink) return;

    const section = document.getElementById(navLink.dataset.id);

    section.scrollIntoView({behavior: "smooth"})
})