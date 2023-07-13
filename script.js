// toggle sidebar
var header = document.getElementById("header");
var toggle_bar = document.getElementById("toggle-bar");
var menu = document.getElementById("menu");
function toggleMenu(){
    toggle_bar.classList.toggle("active");
    menu.classList.toggle("active");
}
toggle_bar.addEventListener("click",toggleMenu);

// scrollspy
var sections = document.querySelectorAll('.section');
var navElements = document.querySelectorAll('.menu-link');
var threshold = 0.5;
if(window.innerWidth < 770){
    threshold = 0.2;
}
var options = {
    // root: document.getElementById("scroll-spy"),
    // rootMargin: "85px",
    threshold: threshold
};
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            document.querySelector('.menu-link.active').classList.remove('active');
            console.log(entry.target.getAttribute("id"));
            navElements[entry.target.dataset.ind].classList.add('active');
        }
    });
},options);
sections.forEach(function(section){
    observer.observe(section);
});

//hide menu on link click
navElements.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        toggleMenu();
        var href = e.target.getAttribute("href");
        location.assign(href);
    })
});