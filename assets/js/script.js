
var loader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
      loader.classList.add("hide");
      document.body.classList.remove("overflow");
   }, 3500);
});




var track1 = document.querySelector(".slider.one");
var track2 = document.querySelector(".slider.two");

window.addEventListener("scroll", (e) => {

   let x = window.pageYOffset;

   track1.style.setProperty('--x', x + "px");
   track2.style.setProperty('--x', x + "px");
});

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

   if (a == true)
      document.body.classList.toggle("overflow");

   if (hamburger.classList.contains("open")) {
      setTimeout(() => {
         hamBtn.style.pointerEvents = "all";
      }, 900);
   }
   if (!hamburger.classList.contains("open")) {
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

      if (a == true)
         document.body.classList.toggle("overflow");
   })
});



/* ======================================== CURSOR ============================================== */

if (a == false) {
   const cursor = document.querySelector('.cursor');

   document.addEventListener('mouseenter', () => {
      cursor.style.display = 'block';
   });

   document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
   });

   document.addEventListener('mousemove', (evt) => {
      const w = cursor.clientWidth;
      const h = cursor.clientHeight;

      cursor.style.transform = `translate(${evt.clientX - w / 2}px, ${evt.clientY - h / 2}px)`;
   });

   var image = document.querySelector(".section-portfolio .wrapper");

   image.addEventListener("mouseenter", () => {
      cursor.classList.add("active");

   })

   image.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");

   })

}

let items = document.querySelectorAll(".carousel-item");
let prev = document.querySelector(".carousel-control-prev");
let next = document.querySelector(".carousel-control-next");
let x = 0;

next.addEventListener("click", () => {
   x++;
   if (x > items.length - 1)
      x = 0;

   let activeItem = document.querySelector(".carousel-item.active");
   activeItem.classList.remove("active");
   items[x].classList.add("active");
});

prev.addEventListener("click", () => {
   x--;
   if (x < 0)
      x = items.length - 1;

   let activeItem = document.querySelector(".carousel-item.active");
   activeItem.classList.remove("active");
   items[x].classList.add("active");
});