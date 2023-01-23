$(document).ready(function () {
  $(".reviews__slider").slick({
    dots: false,
    arrows: true,
    asNavFor: ".reviews__block-video",
  });
  $(".reviews__block-video").slick({
    asNavFor: ".reviews__slider",
    arrows: false,
    dots: false,
  });
});
