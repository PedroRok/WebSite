const logo = document.querySelector("#navbar_logo")
const items = document.querySelectorAll(".navbar_item")

window.addEventListener('scroll', function(){
  var scroll = $(window).scrollTop(),
      dheight = $(document).height(),
      wheight = $(window).height();

  var scrollPercent = (scroll / (dheight - wheight)) * 100;

  if (scrollPercent > 5) {
    logo.id = "navbar_logo_scroll";
  } else {
    logo.id = "navbar_logo";
  }
  

  console.clear();
  console.log(scrollPercent);
})

