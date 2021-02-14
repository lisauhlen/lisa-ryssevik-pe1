const button = document.querySelector(".to-top");

document.addEventListener('scroll', function(e) {

    if(window.scrollY > 650 && window.innerWidth < 1000) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

