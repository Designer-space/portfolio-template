/* SIDERBAR */
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* SHOW SIDEBAR */

    if(navToggle){
        navToggle.addEventListener("click", () => {
            navMenu.classList.add('show-sidebar')
        })
    }

      /* HIDDEN SIDEBAR */

      if(navClose){
        navClose.addEventListener("click", () => {
            navMenu.classList.remove('show-sidebar')
        })
    }

/* SKILLS TABS */
    const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContent => {
                tabContent.classList.remove('skills__active')
            })
            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })
            tab.classList.add('skills__active')
        })
    });

/* MIXITUP JS */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* active work link */
const linkWork = document.querySelectorAll('.work__item')
function activeWork() {
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(L=> L.addEventListener("click",activeWork))

/* Work Popup */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetailes(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetailes(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/* SERVICES MODAL */
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* SWIPER JS */
// let swiper = new Swiper(".testimonials__container", {
//     effect: "cards",
//     grabCursor: true,
//     loop: true,
//   });

  let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });


/* INPUT ANIMATION */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})  

/* Scroll Section Active Link*/
const sections = document.querySelectorAll("section[id");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    let scrolly = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}