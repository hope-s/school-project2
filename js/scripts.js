/* Template: Blink SaaS App Website Bootstrap HTML Template
   Description: Custom JS file
*/


(function ($) {
  "use strict";

  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on('scroll load', function () {
    if ($(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 600, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // offcanvas script from Bootstrap + added element to close menu on click in small viewport
  $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })

  // hover in desktop mode
  function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(function () {
      const shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 300 : 0);
  }
  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


  /* Details Lightbox - Magnific Popup */
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });


  /* Image Slider - Swiper */
  var imageSlider = new Swiper('.image-slider', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 50,
    slidesPerView: 2,
    breakpoints: {
      // when window is <= 575px
      575: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window is <= 991px
      991: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window is <= 1199px
      1199: {
        slidesPerView: 2,
        spaceBetween: 20
      },

    }
  });

    /* Image Slider - Swiper */
    var imageSlider = new Swiper('.image-slider2', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      loop: true,
      spaceBetween: 50,
      slidesPerView: 1,
    });
  

  /* Card Slider - Swiper */
  var cardSlider = new Swiper('.card-slider', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      // when window is <= 991px
      991: {
        slidesPerView: 1
      }
    }
  });

  /* Honor slider */
  var cardSlider = new Swiper('.honor-slider', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      // when window is <= 991px
      991: {
        slidesPerView: 1
      }
    }
  });


  // swiper about
  function slider(flag, numSlides) {
    let centerSlide = (flag % numSlides) + 1;
    let middleOfSlider = numSlides / 2;
    let xCoef = 300 * ((middleOfSlider - centerSlide) / middleOfSlider);

    if ($(window).width() <= 450) {
      xCoef = 0;
    }

    $(".slide-indicator").removeClass("active");
    $(".indicator-" + centerSlide).addClass("active");
    $(".slide.card").removeClass("active");
    $("#side-" + centerSlide).addClass("active");

    $("#side-" + centerSlide).css("z-index", "999");
    centerSlide <= numSlides / 2 ?
      $("#side-" + centerSlide).css(
        "transform",
        `translateX(${xCoef - 100}%) scale(1.5)`
      ) :
      $("#side-" + centerSlide).css(
        "transform",
        `translateX(${xCoef - 100}%) scale(1.5)`
      );

    for (let i = 1; i <= numSlides; i++) {
      if (i == centerSlide) {
        continue;
      }
      $("#side-" + i).css("z-index", "5");
      if (i < centerSlide) {
        $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
        continue;
      }
      $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
    }
  }

  $(document).ready(function () {
    // get the nu,ber of slides
    let slideNum = $(".slide").length;
    let flag = 0;

    // Append the slide-indicators
    for (let i = 1; i <= slideNum; i++) {
      $(".slide-indicator-container").append(
        `<div id="indicator-${i}" class="slide-indicator indicator-${i}"></div>`
      );
    }

    // first slide active by default
    $(".indicator-1").addClass("active");

    // add event listeners to switch to the slide selected when clicking the slide or clicking the slide-indicator
    let addListeners = [
      ".slide-indicator-container",
      "#main-slider",
    ];

    addListeners.forEach((item) => {
      $(item).click((e) => {
        if (e.currentTarget.id == "main-slider") {
          flag = e.target.parentElement.id.split("-")[1] - 1;
        } else {
          flag = e.target.id.split("-")[1] - 1;
        }
        slider(flag, slideNum);
      });
    });

    // Add functionality to next and previous buttons
    $("#nex").click(function () {
      flag = (flag + 1) % slideNum;
      slider(flag, slideNum);
    });
    $("#pre").click(function () {
      flag = Math.abs(flag - 1 + slideNum) % slideNum;
      slider(flag, slideNum);
    });
  });
  // end of  swiper about



  /* Counter - CountTo */
  var a = 0;
  $(window).scroll(function () {
    if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
        });
        a = 1;
      }
    }
  });


  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function () {
    if ($(this).val() != '') {
      $(this).addClass('notEmpty');
    } else {
      $(this).removeClass('notEmpty');
    }
  });


  /* Back To Top Button */
  // create the back to top button
  $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
  var amountScrolled = 700;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('500');
    } else {
      $('a.back-to-top').fadeOut('500');
    }
  });


  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });

})(jQuery);



// register tab =>

//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};

//remove class from a set of items
const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

//return exect parent node of the element
const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!(currentNode.classList.contains(parentClass))) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = (activeStepNum) => {

  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');

  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {

    if (index <= (activeStepNum)) {
      elem.classList.add('js-active');
    }

  });
};

//get active panel
const getActivePanel = () => {

  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {

    if (elem.classList.contains('js-active')) {

      activePanel = elem;

    }

  });

  return activePanel;

};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {

  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === (activePanelNum)) {

      elem.classList.add('js-active');

      setFormHeight(elem);

    }
  })

};

//set form height equal to current panel height
const formHeight = (activePanel) => {

  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
}

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {

  //check if click target is a step button
  const eventTarget = e.target;

  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }

  //get active button step number
  const activeStep = getActiveStep(eventTarget);

  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);

  //open active panel
  setActivePanel(activeStep);
});

//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {

  const eventTarget = e.target;

  //check if we clicked on `PREV` or NEXT` buttons
  if (!((eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) || (eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))) {
    return;
  }

  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  //set active step and active panel onclick
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;

  } else {

    activePanelNum++;

  }

  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);

});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = (newType) => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  })
};

//selector onchange - changing animation
const animationSelect = document.querySelector('.pick-animation__select');

// animationSelect.addEventListener('change', () => {
//   const newAnimationType = animationSelect.value;

//   setAnimationType(newAnimationType);
// });



// zoom gallery
function imageZoom() {
  var $zoomimg = $('img.zoomimg');
  $zoomimg.on('click', function (e) {
    e.stopPropagation();
    $(this).after('<div id="imgZoomDiv"><div><img src="" class="zoomed" /></div></div>');
    var $t = $(this);
    $('.zoomed').attr({
      src: $t.attr('data-src')
    });
    // $('#imgZoomDiv').animate({opacity:"1"}, 250).show();
    $('#imgZoomDiv').show();

    $('#imgZoomDiv > div').hide().prepend('<i class="bi bi-x close"></i>').fadeIn(500); // add close button

  });
  $(document).on('click', '#imgZoomDiv', function (e) {
    e.preventDefault();
    $(this).hide().remove();
  });
};
imageZoom();
// end  of  zoom gallery


var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// loader
// loader();

// function loader(success) {
//   var obj = document.querySelector('.preloader'),
//     inner = document.querySelector('.preloader_inner'),
//     page = document.querySelector('body');
//   obj.classList.add('show');
//   page.classList.remove('show');
//   var w = 0,
//     t = setInterval(function () {
//       w = w + 1;
//       inner.textContent = w + '%';
//       if (w === 100) {
//         obj.classList.remove('show');
//         obj.classList.add('opacity-sajjeo');
//         page.classList.add('show');
//         clearInterval(t);
//         w = 0;
//         if (success) {
//           return success();
//         }
//       }
//     }, 10);
// }
// 

// typed.js demo
var typed = new Typed('.typed', {
  stringsElement: '.typed-strings',
  typeSpeed: 30

});