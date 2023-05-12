const values = document.querySelectorAll(".values")
const xmark = document.querySelectorAll(".xmark")


for (let i = 0; i < values.length; i++) {
    values[i].addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        values[i].classList.add("active")
        xmark[i].classList.add("active-x")
    })
    xmark[i].addEventListener("click", () => {

        values[i].classList.remove("active")
        xmark[i].classList.remove("active-x")
    })
    
}







const nthAll = document.querySelectorAll("#nth a");
const dotLinkEffect = document.querySelector(".dot-link-effect");

function removeAllClass_fromNth() {
    const nthAll = document.querySelectorAll("#nth a");
    for (let i = 0; i < nthAll.length; i++) {
        dotLinkEffect.classList.remove("active" + i)
    }
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("click", () => {
        removeAllClass_fromNth()
        dotLinkEffect.classList.add("active" + i)
    })
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("mouseover", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = ".50"
        }
        nthAll[i].style.opacity = "1"
    })

    nthAll[i].addEventListener("mouseout", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = "1"
        }
    })
}

const menuBtn = document.querySelector(".menu-btn");
const navbarLinksM = document.querySelector(".nav-links");
const navLinkContainer = document.querySelector(".nav-link-container");
const downloadBtn = document.querySelector(".download-cv");
const overlay = document.querySelector(".overlay");



document.addEventListener("click", (e) => {
    target = e.target.parentNode;

    if (target === menuBtn) {
        navbarLinksM.classList.toggle("active-nav")
        overlay.style.display = "block";

        setTimeout(() => {
            navbarLinksM.classList.toggle("anim-navs")
        }, 100);
    }

    if (target != menuBtn && target != navLinkContainer && target != downloadBtn && target != navbarLinksM) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")
        overlay.style.display = "none";
    }

    if (e.target == overlay) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")
        overlay.style.display = "none";

    }
});


var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    initialSlide: 1,
    coverflowEffect: {
        rotate: 0,
        stretch: 70,
        depth: 250,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-nexts",
        prevEl: ".swiper-button-prevs",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
});