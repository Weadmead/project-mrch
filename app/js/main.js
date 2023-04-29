$(function () {
    $('.hero-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000
    });


    Fancybox.bind("[data-fancybox]", {

    });

    $(".star-rating").rateYo({
        
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
      });
});