document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if(section){
            e.preventDefault();

            section.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});