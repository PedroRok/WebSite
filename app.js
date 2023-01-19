const logo = document.querySelector("#navbar_logo")
const navbar = document.querySelector(".navbar")
const items = document.querySelectorAll(".navbar_item")

const lang = document.querySelector("#dropbtn")


window.addEventListener('scroll', function(){
  var scroll = $(window).scrollTop(),
      dheight = $(document).height(),
      wheight = $(window).height();

  //var scrollPercent = (scroll / (dheight - wheight)) * 100;
  if (scroll > 80) {
    logo.id = "navbar_logo_scroll";
  } else {
    logo.id = "navbar_logo";
  }
})