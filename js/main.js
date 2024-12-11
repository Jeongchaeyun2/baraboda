
//depth2
$(".gnb>li").hover(function () {
  $(this).find(".depth2").stop().fadeToggle();
});

//search
$(".search").hide();
$(".btn_search").click(function () {
  $(".search").fadeIn();
  $("body").css({ "overflow": "hidden" }); /* 스크롤바 없애기 */
});

$(".search_close").click(function () {
  $(".search").fadeOut();
  $("body").css({ "overflow": "auto" });/* 스크롤바 원상복구 */
});

$(".ham").click(function () {
  $(".dim").fadeIn();
  $(".mgnb_wrap").animate({
    "right": "0"
  });
});

$(".mgnb_close").click(function () {
  $(".dim").fadeOut();
  $(".mgnb_wrap").animate({
    "right": "-100%"
  });
});


$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

//비주얼 슬라이드
const visual_list = new Swiper('.visual_list', {
  // autoplay: {//자동재생
  //   delay: 3000,//3초
  //   disableOnInteraction: false,
  // },
  effect: "fade", //페이드 효과
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  loop: true, //기본값 false, 슬라이드 반복
  navigation: {
    // nextEl: ".swiper-button-next", //다음
    // prevEl: ".swiper-button-prev", //이전
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const coffee_list = new Swiper('.coffee_list', {
  autoplay: {//자동재생
    delay: 3000,//3초
    disableOnInteraction: false,
  },
  centeredSlides: true,
  speed: 1000,
  loop: true, //기본값 false, 슬라이드 반복

  breakpoints: {
    0: {
      slidesPerView: 1.5,
      // spaceBetween: 20
    },
    768: {
      slidesPerView: 2.5,
      // spaceBetween: 60
    },
    1200: {
      slidesPerView: 4,
      // spaceBetween: 30
    },
  },
});

const story_txt_list = new Swiper('.story_txt_list', {
  // autoplay: {//자동재생
  //   delay: 3000,//3초
  //   disableOnInteraction: false,
  // },
  effect: "fade", //페이드 효과
  fadeEffect: {
    crossFade: true
  }
});

const story_img_list = new Swiper('.story_img_list', {
  autoplay: {//자동재생
    delay: 3000,//3초
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

//슬라이드 2개 연동
//슬라이드 변수명을 기입하여 컨트롤하게 처리
//auto play 옵션을 한 개의 슬라이드에만 적용
story_txt_list.controller.control = story_img_list;
story_img_list.controller.control = story_txt_list;

$(".about ul li:nth-child(1)").addClass("active");
$(".about ul li").click(function () {

  //마우스 올린 요소에는 active 크래스 추가
  $(this).addClass("active");

  //마우스 올린 요소의 형제요소에는 active 클래스 제거
  $(this).siblings().removeClass("active");
});