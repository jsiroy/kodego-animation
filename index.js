document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let elements = document.getElementsByClassName("headline-2");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }, 1800);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let elements = document.getElementsByClassName("logo");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }, 3800);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let elements = document.getElementsByClassName("sub-headline");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let elements = document.getElementsByClassName("learn-more");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let elements = document.getElementsByClassName("replay");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }, 3500);
});

document.getElementById("learn-more-btn").addEventListener("click", function() {
    window.location.href = "https://kodego.ph/";
});

document.getElementById("replay-btn").addEventListener("click", function() {
    window.location.reload();
});