var a;

if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    a = true;
} else {
    a = false;
}

/* ============================== HAMBURGER ============================ */

let hamBtn = document.querySelector(".hamburger");
let hamburger = document.querySelector(".hamburger-menu");

hamBtn.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    hamBtn.classList.toggle("open");
    hamBtn.style.pointerEvents = "none";

    if(a==true)
        document.body.classList.toggle("overflow");

    if(hamburger.classList.contains("open"))
    {
        setTimeout(() => {
            hamBtn.style.pointerEvents = "all";
        }, 900);
    }
    if(!hamburger.classList.contains("open"))
    {
        setTimeout(() => {
            hamBtn.style.pointerEvents = "all";
        }, 600);
    }

});

let hamLinks = document.querySelectorAll(".hamburger-menu ul li a");

hamLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        hamBtn.classList.toggle("open");

        if(a == true)
            document.body.classList.toggle("overflow");
    })
});

let inputs = document.querySelectorAll(".input-field *");
let parents = document.querySelectorAll(".input-field");
let textarea = document.querySelectorAll(".input-field textarea");

inputs.forEach(input => {
    input.addEventListener("focus", ()=> {

        parents.forEach(p => {
            p.classList.remove("active");
        });

        input.parentElement.classList.add("active");
    });
});

inputs.forEach(input => {
    input.addEventListener("blur", ()=> {

        parents.forEach(p => {
            p.classList.remove("active");
        });
    });
});