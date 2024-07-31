// <======== Initializing AOS-Animations JS ========>
AOS.init({
    duration: 1200,
});


// <======== JS Program to Run the Pre-Loader ========>
const container = document.querySelector(".container");
const preLoader = document.querySelector("#pre-loader");
container.style.overflow = "hidden";

setTimeout(function () {
    $('#pre-loader').fadeToggle();
}, 1500);


// <======== JS Program For the Scroll-To-Top Button ========>
const navbarContainer = document.querySelector("#header .navbar-container");
const scrollBtn = document.querySelector("#scrollBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        scrollBtn.classList.add("show");
        navbarContainer.classList.add("scroll");
    }
    else {
        scrollBtn.classList.remove("show");
        navbarContainer.classList.remove("scroll");
    }
})


// <======== JS Program For the Responsive Navigation Bar ========>
const menuIcon = document.querySelector("#navbar .ri-menu-line");
const closeIcon = document.querySelector("#navbar .middle-navbar.responsive .ri-close-line");
const middleNavbarResponsive = document.querySelector("#navbar .middle-navbar.responsive");
const navigationMenuLinks = document.querySelectorAll("#navbar .middle-navbar.responsive ul li a");

menuIcon.addEventListener("click", () => {
    middleNavbarResponsive.style.transform = 'translate(0px)';
})

closeIcon.addEventListener("click", () => {
    middleNavbarResponsive.style.transform = 'translate(200%)';
})

navigationMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        middleNavbarResponsive.style.transform = 'translate(200%)';
    })
})


// <======== JS Program to Execute Owl-Carousel for Testimonial-Container ========>
$(function () {
    var owl = $("#testimonial-container .owl-carousel");
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1200: {
                items: 3
            },
            2000: {
                items: 4
            }
        }
    });
});

// <======== JS Program to Execute Owl-Carousel for Projects-Container ========>
    $(function () {
        var owl = $("#project-container .owl-carousel");
        owl.owlCarousel({
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                2000: {
                    items: 4
                }
            }
        });
    });


// <======== JS Program to Add Newsletter-Container Alert ========>
const newsletterContainerForm = document.querySelector("#newsletter-container .left-newsletter form");
const newsletterContainerFormInput = document.querySelector("#newsletter-container .left-newsletter form input");
const newsletterContainerAlert = document.querySelector("#newsletter-container-alert");
const newsletterContainerAlertIcon = document.querySelector("#newsletter-container-alert .ri-close-line");

if (newsletterContainerForm) {
    newsletterContainerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        newsletterContainerFormInput.value = "";

        newsletterContainerAlert.classList.add("show");
        newsletterContainerAlertIcon.addEventListener("click", () => {
            newsletterContainerAlert.classList.remove("show");
        })

        setTimeout(() => {
            newsletterContainerAlert.classList.remove("show");
        }, 4000);
    })
}


// <======== JS Program to Send all the Data of the Contact-Container Form to Google Sheet ========>
const contactContainerForm = document.querySelector("#contact-container .right-contact form");
const contactContainerFormAllInputs = document.querySelectorAll("#contact-container .right-contact .form-input");
const contactContainerAlert = document.querySelector("#contact-container-alert");
const contactContainerAlertIcon = document.querySelector("#contact-container-alert .ri-close-line");

if (contactContainerForm) {
    contactContainerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = new FormData(contactContainerForm);
        fetch('https://script.google.com/macros/s/AKfycbyNxb5arYHIY7SuI8UOHJIrQCHXrJ_SybwgK2j2SmhjNKE_trbxB4tpqxyzSxYzavEH/exec', {
            method: "POST",
            body: data,
        })
            .then(res => res.text())
        contactContainerFormAllInputs.forEach((input) => {
            input.value = "";
        })

        contactContainerAlert.classList.add("show");
        contactContainerAlertIcon.addEventListener("click", () => {
            contactContainerAlert.classList.remove("show");
        })

        setTimeout(() => {
            contactContainerAlert.classList.remove("show");
        }, 4000);
    })
}


// <======== JS Program to Send all the Data of the Appointment-Container Form to Google Sheet ========>
const appointmentContainerForm = document.querySelector("#appointment-container .right-appointment form");
const appointmentContainerFormAllInputs = document.querySelectorAll("#appointment-container .right-appointment .form-input");

if (appointmentContainerForm) {
    appointmentContainerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = new FormData(appointmentContainerForm);
        fetch('https://script.google.com/macros/s/AKfycbyNxb5arYHIY7SuI8UOHJIrQCHXrJ_SybwgK2j2SmhjNKE_trbxB4tpqxyzSxYzavEH/exec', {
            method: "POST",
            body: data,
        })
            .then(res => res.text())
        appointmentContainerFormAllInputs.forEach((input) => {
            input.value = "";
        })

        contactContainerAlert.classList.add("show");
        contactContainerAlertIcon.addEventListener("click", () => {
            contactContainerAlert.classList.remove("show");
        })

        setTimeout(() => {
            contactContainerAlert.classList.remove("show");
        }, 4000);
    })
}