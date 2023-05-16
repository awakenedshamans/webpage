// Metamask bağlantı durumunu localStorage'da saklamak için anahtar
const storageKey = 'metamaskConnected';

// Sayfa yüklendiğinde bağlantı durumunu kontrol et
if (localStorage.getItem(storageKey) === 'true') {
    document.addEventListener('DOMContentLoaded', async () => {
        const isConnected = localStorage.getItem(storageKey) === 'true';
        if (isConnected) {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                showMetamaskInfo();
                const metamaskButton = document.getElementById('metamaskButton');
                metamaskButton.innerHTML = "Disconnect"
                metamaskButton.style.background = "#905F23"
            }
        }
    });
}

// Metamask butonuna tıklandığında çağrılacak fonksiyon
async function openMetamask() {
    // Metamask'ın var olup olmadığını kontrol et
    if (typeof window.ethereum !== 'undefined') {
        // Metamask'ı açmak için istemeyi gönder
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        // Kullanıcının giriş yapması durumunda alınan hesap bilgilerini göster
        if (accounts.length > 0) {
            const address = accounts[0];
            const metamaskButton = document.getElementById('metamaskButton');
            metamaskButton.innerHTML = "Disconnect";
            metamaskButton.style.background = "#905F23";

            // Hesap bakiyesini al
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(address);

            // Bakiyeyi göster
            const balanceInfoDiv = document.getElementById('balanceInfo');
            const etherBalance = ethers.utils.formatEther(balance);

            // Bağlantı durumunu localStorage'a kaydet
            if (metamaskButton.innerHTML === "Disconnect") {
                localStorage.setItem(storageKey, 'true');
            }
        }
    } else {
        // Metamask bulunamazsa kullanıcıya bir hata mesajı göster
        alert('Metamask uygulaması bulunamadı. Lütfen yükleyin ve giriş yapın.');
    }
}

// Metamask bağlantı durunda kullanıcı bilgilerini gösteren fonksiyon
async function showMetamaskInfo() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const address = accounts[0];
    const infoDiv = document.getElementById('metamaskInfo');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);

    const balanceInfoDiv = document.getElementById('balanceInfo');
    const etherBalance = ethers.utils.formatEther(balance);
}

// Metamask çıkış fonksiyonu
function logoutMetamask() {
    const metamaskButton = document.getElementById('metamaskButton');
    metamaskButton.innerHTML = "Connect";
    metamaskButton.style.background = "";
    localStorage.removeItem(storageKey);
}

// Metamask butonuna tıklanınca openMetamask fonksiyonunu çağır
const metamaskButton = document.getElementById('metamaskButton');
metamaskButton.addEventListener('click', function () {
    if (metamaskButton.innerHTML === "Disconnect") {
        logoutMetamask();
    } else {
        openMetamask();
    }
});

setTimeout(() => {
    if (metamaskButton.innerHTML === "Connect") {
        localStorage.removeItem(storageKey);
    }
}, 1500);         
    



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




const submitBtn = document.querySelector(".submit-btn")
const forms = document.querySelector("form")
const emailV = document.querySelector("#email")
const subjectV = document.querySelector("#subject")

forms.addEventListener("submit", ()=>{
    submitBtn.value = "Sending..."
    setTimeout(() => {
        emailV.value = ""
        subjectV.value = ""
        submitBtn.value = "Thank You"
    }, 1200);
    setTimeout(() => {
        submitBtn.value = "Send"
    }, 3200);
})


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