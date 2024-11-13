// Get the button
let backtotop = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backtotop.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll',window.pageYOffset- 5 / (document.body.offsetHeight - window.innerHeight));
//   }, false);