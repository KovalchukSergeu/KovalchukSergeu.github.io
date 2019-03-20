$(function () {
  // $('btn_upScroll').click(function () {
  //   $('body').animate({'scrollTop': 0}, 1000);
  //   $('html').animate({'scrollTop': 0}, 1000);
  // });
  $(window).scroll(function () {
    if($(window).scrollTop() > 500) {
      $('.btn_upScroll').addClass('active');
    }else{
      $('.btn_upScroll').removeClass('active');
    }
  });
});