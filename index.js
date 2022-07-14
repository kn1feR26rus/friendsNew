$(document).ready(function () {

  let swiper = new Swiper(".swiper", {
    slidesPerView: 1,

    navigation: {
      nextEl: ".arrow_next",
      prevEl: ".arrow_prev",
    },
  });

  const slides = [
    {
      url: "/assets/images/banner1.png",
      data: 01,
      titleText:
        "Скоро! Новый проект «Кварталы 17/77» рядом с бульваром по ул. Щипакина",
      text: "От надежного застройщика – <br>ГК «ЮгСтройИнвест»",
    },
    {
      url: "/assets/images/banner2.png",
      data: 02,
      titleText: "Покупать на старте максимально выгодно!",
      text: "Стоимость квадратного метра в наших микрорайонах с момента старта продаж до сдачи дома в среднем вырастает на 20%",
    },
    {
      url: "/assets/images/banner3.png",
      data: 03,
      titleText: "Большой выбор планировочных решений!",
      text: "Только на старте продаж вы можете подобрать себе планировку с максимально удобным расположением и лучшим видом из окна",
    },
  ];

  function displaySlides(data) {
    $(data).each(function (i) {
      let item = data[i];

      let slide =
        $(`<div><div class="banner_container-text"><h1 class="banner_title">${item.titleText}</h1>
      <h2 class="banner_subtitle">${item.text}</h2>
      <a href="" class="banner_btn">Узнать первым о старте продаж квартир</a></div>
      </div>`)
          .addClass("swiper-slide banner_background")
          .attr("id", item.data)
          .css("background-image", "url(" + item.url + ")");
    
      swiper.appendSlide(slide);
    });
   
  }

  displaySlides(slides);
  console.log($(".swiper-slide-active").attr("id"))
  $(".arrow_next").on('click', function () {
    $("#active_count").text("0" + $(".swiper-slide-active").attr("id")); 
   
    $(".banner_navigation-text").each(function(i) {
        let currentItem = $(".banner_navigation-text")[i]
        if ($(".swiper-slide-active").attr("id") == $(currentItem).attr('data')) {
            $(this).addClass('current')
        } else {
            $(this).removeClass('current')
        }
    })
  });

  $(".arrow_prev").on('click', function () {
    $("#active_count").text("0" + $(".swiper-slide-active").attr("id"));
    
    $(".banner_navigation-text").each(function(i) {
        let currentItem = $(".banner_navigation-text")[i]
        if ($(".swiper-slide-active").attr("id") == $(currentItem).attr('data')) {
            $(this).addClass('current')
        } else {
            $(this).removeClass('current')
        }
    })
  });
});
