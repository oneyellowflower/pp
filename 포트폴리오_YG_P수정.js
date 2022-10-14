$(document).ready(function () {
  $(".box2").hover(function () {
    $(this).children(".name").toggleClass("on");
  });

  $(".select li").click(function () {
    var num = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".sel_menu > div").filter(":visible").stop(true).fadeOut(350).end()
      .eq(num).stop(true).fadeIn(350);
  });
  $(".select li:first").addClass("on").add(".sel_menu > div:first").show();

// ----------------------------------------메뉴 열고 닫기-------------------------------
  // $(".gnb li").click(function(){
  //   var num = $(this).index();
  //   $(".snb > div").addClass("on").siblings().removeClass("on");
  //   $(".snb > div").eq(num).toggle("fast", "swing");
  // });
  
  $(".head_menu").click(function(){
    $(".gnb").toggleClass("on").show();
  });
 
// -----------------닫기------------------------
  $(".menu span").click(function(){
    $(".menu").hide();
  });
  $(".snb_m span").click(function(){
    $(".snb_m").hide();
  });
});

// ---------------스와이퍼----------------------

var swiper1 = new Swiper(".artist", {
  hashNavigation: {
      watchState: true,
  },
  pagination: {
      el: ".artist_control.swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".artist_control.swiper-button-next",
      prevEl: ".artist_control.swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

var swiper2 = new Swiper(".actors", {
  hashNavigation: {
      watchState: true,
  },
  pagination: {
      el: ".actors_control.swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".actors_control.swiper-button-next",
      prevEl: ".actors_control.swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

var swiper3 = new Swiper(".goods", {
  hashNavigation: {
      watchState: true,
  },
  pagination: {
      el: ".goods .swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".goods .swiper-button-next",
      prevEl: ".goods .swiper-button-prev",
  },
});

var swiper4 = new Swiper(".goodsgrid", {
  slidesPerView: 6,
  grid: {
      rows: 2,
  },
  spaceBetween: 30,
  pagination: {
      el: ".b .swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".b .swiper-button-next",
      prevEl: ".b .swiper-button-prev",
  },
});

var swiper5 = new Swiper(".album", {
  slidesPerView: 3,
  spaceBetween: 10,
  direction: "vertical",
  navigation: {
      nextEl: ".album_list .swiper-button-next"
  },
  observer: true,
  observeParents: true,
});

