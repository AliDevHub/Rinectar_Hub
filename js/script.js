
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  getDirection: true,
});



function textmonialSlider() {
    new Swiper('.slide-wrapper', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 2,
        autoplay: {
            delay: 4400,
            disableOnInteraction: false,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination2',
          dynamicBullets: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
        },
    
      });
}
textmonialSlider()

function ourPlacemetStudent () {
  new Swiper(".slide-student", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      },
    }
  });
};
ourPlacemetStudent()

function slideGallery () {

 new Swiper(".slide-gallery", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  });

}
slideGallery()

function productSlider() {
  let smallImages = document.querySelectorAll(".gallery-content .left .box img");
  let fullImage = document.querySelector("#full-image");
  let right2 = document.querySelector(".right2");
  smallImages.forEach(function (item) {
      item.addEventListener("click", function () {
        right2.style.display = "block";
        setInterval(() => {
          right2.style.display = "none";
        }, 3000)
        fullImage.src = item.src;
      });
  });
}
productSlider();

function poup() {
  const popupBox = document.querySelector(".popup-sec");
  const form = document.querySelector('.form-container form');
  
  document.querySelectorAll('.duration').forEach((elem) => {
    elem.addEventListener('click', () => {
      popupBox.classList.toggle('hide');
    });
  });
  
  // Prevent closing when clicking inside the form container
  document.querySelector('.form-container').addEventListener('click', (event) => {
    event.stopPropagation();
  });
  
  // Toggle popup visibility when clicking outside the form-container
  popupBox.addEventListener('click', () => {
    popupBox.classList.toggle('hide');
  });
  
  // Handle form submission without reloading or changing position
  form.addEventListener('submit', (event) => {
    // event.preventDefault(); // Prevent the default form submission behavior
  
    // You can hide the popup after submission if needed
    popupBox.classList.add('hide');
  });
  
}
poup()
