
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  getDirection: true,
});

function ourCourse() {
  let ourcorseLists = document.querySelectorAll(".courses-lists li");

  ourcorseLists.forEach(function (item) {
    item.addEventListener("click", function (e) {
      // Prevent default anchor behavior
      e.preventDefault();

      // Get the clicked text
      let clickedText = e.target.innerText.trim();
      console.log("Clicked Course:", clickedText);

      // Find the corresponding course detail
      let courseDetails = document.querySelector(".course-details .container .wrapper .items .item");
      let courseItems = document.querySelectorAll(".course-details .item");
      let found = false;

      courseItems.forEach(function (courseItem) {
        let heading = courseItem.querySelector(".heading").innerText.trim();

        // Match the clicked course text with the course detail heading
        if (heading === clickedText) {
          console.log("Found Matching Course:", heading);

          // Scroll smoothly to the course detail
          locoScroll.scrollTo(courseDetails);

          // Highlight the course item for visibility
          courseItem.style.border = "2px solid #ff9020";
          courseItem.style.scale = "1.04";
          courseItem.style.boxShadow = "0px 0px 19px 4px #ffffff";
          found = true;

          setTimeout(() => {
            courseItem.style.scale = "1";
            courseItem.style.boxShadow = "0px 0px 15px 10px #5252521a";
            courseItem.style.border = "none"; // Remove highlight after 3 seconds
          }, 3000);
        }
      });

      if (!found) {
        console.warn('No matching course found!');
      }
    });
  });
}

ourCourse();


let body = document.querySelector("body");
let cursor = document.getElementById("cursor");

body.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:0.3
    })
})

function textmonialSlider() {
    new Swiper('.slide-wrapper2', {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
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
    slidesPerView: "auto",
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
     360: {
          slidesPerView: 1
      },
      1400: {
          slidesPerView: 3
      },
  }
  });
}
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
    },
    breakpoints: {
      360: {
          slidesPerView: 1
      }
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




