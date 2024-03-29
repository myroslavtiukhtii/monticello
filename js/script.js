$(document).ready(function() {

    // button
    
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })

    const MENULINK = document.querySelectorAll('.menu-list__item');

    for (let i = 0; i < MENULINK.length; i++) {
      MENULINK[i].addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
      })
    }

    // up btn

    const UPBTN = document.querySelector('.up-btn');

    UPBTN.addEventListener('click', toWindowScrollTop);

    function toWindowScrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        UPBTN.style.display = 'block';
      } else {
        UPBTN.style.display = 'none';
      }
    }

    // reveal

    function reveal() {
      let reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);


    // slider main 

$('.slider').slick({
    arrows:false,
    dots:true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  })


  // slider news

  $('.slider-news').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/arrow-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/arrow-right.svg'>",
    responsive: [
      {
        breakpoint: 1170,
        settings: {
        slidesToShow: 2,
        centerMode: true, 
        centerPadding: '20px',
        dots: true,
        arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        centerMode: false, 
        dots: true,
        arrows: false,
        }
      }
     ]
  });


  // Gallery

  $('.gallery-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    },
    gallery: {
      enabled: true
    },
});






});


function initMap() {

  const CENTER = { lat: 50.453451764092684, lng: 30.517154601622465 };
  const MAP = new google.maps.Map(document.getElementById("map"), {
      center: CENTER,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    const SVG_MARKER = {
        scale: 2,
        anchor: new google.maps.Point(0, 35),
      };


      marker = new google.maps.Marker({
        position: CENTER,
        map: MAP,
        icon:'./img/marker.svg',
        animation: google.maps.Animation.DROP
    });

}

