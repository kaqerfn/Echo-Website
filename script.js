document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if (section) {
            e.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Simple reveal animation

const elements = document.querySelectorAll(
    ".card, .package, .hero-content, .heading"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold:0.15
});


elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});