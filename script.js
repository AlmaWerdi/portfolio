const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`nav a[href="#${id}"]`);

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            navLinks.forEach(link => link.classList.remove("active"));
            navLink.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});