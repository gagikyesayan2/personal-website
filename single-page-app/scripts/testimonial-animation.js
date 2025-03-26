document.addEventListener("DOMContentLoaded", function () {
    let stopAnimation = true;
    const smallTestimonialContainer = document.querySelector(".small-testimonial-container");
    const rowTestimonial = smallTestimonialContainer.querySelector(".row-testimonial");
    const testimonial = document.querySelector(".testimonial");

    function checkMatch() {
        const mediaQuery = window.matchMedia("(max-width: 880px)");
        if(mediaQuery.matches){
            testimonial.style.height = "1350px";
            rowTestimonial.style.flexWrap = "wrap";
            rowTestimonial.style.justifyContent = "center";
            smallTestimonialContainer.style.position = "static";
            console.log("max-width: 880px");
            
            stopAnimation = !stopAnimation;            
        }else{
            testimonial.style.height = "700px";
            smallTestimonialContainer.style.position = "absolute";
            rowTestimonial.style.flexWrap = "nowrap";
            rowTestimonial.style.justifyContent = "space-around";

            stopAnimation = true;
            console.log("max-width:more than 880px");
            
        }

    }
    checkMatch();


   


    let initialRight = parseInt(window.getComputedStyle(smallTestimonialContainer).right) || 0;

    window.addEventListener("scroll", () => {
      
        const scrollTop = window.scrollY;
        const triggerPoint = smallTestimonialContainer.offsetTop - 800;
        checkMatch();

        if (scrollTop >= triggerPoint && stopAnimation) {
            let offset = scrollTop - triggerPoint;
            smallTestimonialContainer.style.right = (initialRight + offset + 10) + "px";
        }
      
    });

});


const testimonialContainer = document.querySelector('.small-testimonial-container');
const rowTestimonial = document.querySelectorAll('.row-testimonial .col');
const breakpoints = [
    { query: "(max-width: 950px)", callback: () => {
        testimonialContainer.style.right = "-750px";
    }
     },
    { query: "(max-width: 900px)", callback: () => {
        testimonialContainer.style.right = "-900px";
     
    }}
   
];

breakpoints.forEach(({ query, callback }) => {
    const mediaQuery = window.matchMedia(query);
    function checkMatch(event) {
        if (event.matches) callback();
    }
    mediaQuery.addEventListener("change", checkMatch);
    checkMatch(mediaQuery); // Run initially
});
