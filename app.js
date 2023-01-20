const logo = document.querySelector("#navbar_logo");
const navbar = document.querySelector(".navbar");
const items = document.querySelectorAll(".navbar_item");

const lang = document.querySelector("#dropbtn");
const root = document.querySelector(":root");

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") == "dark") {
    changeTheme();
  }
});

window.addEventListener("scroll", function () {
  var scroll = $(window).scrollTop(),
    dheight = $(document).height(),
    wheight = $(window).height();

  //var scrollPercent = (scroll / (dheight - wheight)) * 100;
  if (scroll > 80) {
    logo.id = "navbar_logo_scroll";
  } else {
    logo.id = "navbar_logo";
  }
});

function changeTheme() {
  const element = document.getElementById("theme");
  setTimeout(() => {
    if (element.classList.contains("dark")) {
      element.classList.remove("dark");
      element.classList.add("light");
      element.src = "resources/svg/sun.svg";
      toTheme("light");
    } else {
      element.classList.remove("light");
      element.classList.add("dark");
      element.src = "resources/svg/moon.svg";
      toTheme("dark");
    }
  }, 400);
  element.style.animation = "theme 0.8s ease-in-out 1";
  setTimeout(() => {
    element.style.animation = "none";
  }, 800);
}

function toTheme(theme) {
  const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
  if (theme == "dark") {
    variables = {
      '--bgcolor': '#181a1b',
      '--strokecolor': '#1f2123',
      '--darkTxtColor': '#bbb5ac',
      '--myblue': '#72B4EA',
      '--mygradient': 'linear-gradient(130deg, #003E5C 10%,  #011926 70%)'
    };
  } else {
    variables = {
      '--bgcolor': '#fefefe',
      '--strokecolor': '#f3f3f3',
      '--darkTxtColor': '#423D51',
      '--myblue': '#5BA8E7',
      '--mygradient': 'linear-gradient(130deg, #3F85AB 10%,  #003E5C 70%)'
    };
  }
  setVariables(variables);

  localStorage.setItem("theme", theme);
}
