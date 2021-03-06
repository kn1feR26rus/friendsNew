$(document).ready(function () {
  let windowWidth = $(window).width();
  let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".arrow_next",
      prevEl: ".arrow_prev",
    },
  });

  const data = [
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

  const mobileData = [
    {
      url: "/assets/images/banner1.png",
      data: 01,
      titleText: "Скоро! Новый проект рядом с бульваром Щипакина ",
      text: "Новое качество жизни<br> в центре событий большого города!",
    },
    {
      url: "/assets/images/banner2.png",
      data: 02,
      titleText: "Покупать на старте максимально<br> выгодно!",
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

  $(window).on("resize", function () {
    location.reload();
    if (windowWidth > 768) {
      displaySlides(data);
    } else {
      displaySlides(mobileData);
    }
  });

  if (windowWidth > 768) {
    displaySlides(data);
  } else {
    displaySlides(mobileData);
  }

  $(".mobile_menu").click(function () {
    $(this).toggleClass("open");
    $(".mobile_navigtaion").toggleClass("mobile_menu");
    $("body").toggleClass("oveflow_hidden");
  });

  $(".close_btn").click(function () {
    $(".mobile_menu").removeClass("open");
    $(".mobile_navigtaion").removeClass("mobile_menu");
    $("body").removeClass("oveflow_hidden");
  });

  $(".arrow_next").on("click", function () {
    $("#active_count").text("0" + $(".swiper-slide-active").attr("id"));
    $(".mobile_active_count").text("0" + $(".swiper-slide-active").attr("id"));

    $(".banner_navigation-text").each(function (i) {
      let currentItem = $(".banner_navigation-text")[i];
      if ($(".swiper-slide-active").attr("id") == $(currentItem).attr("data")) {
        $(this).addClass("current");
      } else {
        $(this).removeClass("current");
      }
    });
  });

  $(".arrow_prev").on("click", function () {
    $("#active_count").text("0" + $(".swiper-slide-active").attr("id"));
    $(".mobile_active_count").text("0" + $(".swiper-slide-active").attr("id"));
    $(".banner_navigation-text").each(function (i) {
      let currentItem = $(".banner_navigation-text")[i];
      if ($(".swiper-slide-active").attr("id") == $(currentItem).attr("data")) {
        $(this).addClass("current");
      } else {
        $(this).removeClass("current");
      }
    });
  });
});
