let scrollTimer;

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const toggle = document.querySelector('.toggle');

    logo.classList.toggle('sticky',window.scrollY );
    header.classList.toggle('sticky',window.scrollY );
    logo.style.opacity = 1;
    toggle.style.opacity = 1;

    

    clearTimeout(header,toggle,logo);

    scrollTimer = setTimeout(function () {
        console.log("Scrolling has stopped!");
        if(window.scrollY > 400){

            onScrollEnd(header);
        }
        
    }, 3220); 
});

function onScrollEnd(header) {
    header.classList.remove('sticky');
    header.style.transition = "1s";
    const logo = document.querySelector('.logo');
    const toggle = document.querySelector('.toggle');
    toggle.style.opacity = 0;
    logo.style.opacity = 0;
}
       
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');

    menuToggle.classList.toggle('active');
    logo.classList.toggle('active');
    menu.classList.toggle('active');

}


function openExternalLinks(){
    const linkedin = document.querySelector('.linkedin-icon');
    const linkedinUrl = "https://www.linkedin.com/in/gagik-yesayan-a40951208/";
    linkedin.onclick = () => window.open(linkedinUrl,'_blank');

    const github = document.querySelector('.github-icon');
    const githubUrl = "https://github.com/gagikyesayan2";
    github.onclick = () => window.open(githubUrl,'_blank');
}
openExternalLinks();
