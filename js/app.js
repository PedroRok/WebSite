const logo = document.querySelector("#navbar_logo");

const lang = document.querySelector("#dropbtn");
const root = document.querySelector(":root");

const about = document.querySelector("#about");

const container = document.getElementById("burg");
const ncontents = document.getElementById("nvbar_contents");

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
    about.id = "about_scroll";
    root.style.setProperty("--burguer-color", "#5ba8e7");
  } else {
    logo.id = "navbar_logo";
    about.id = "about";
    root.style.setProperty("--burguer-color", "#fefefe");
  }
});

function changeTheme() {
  const element = document.getElementById("theme");
  if (isInAnimation(element)) return;
  addAnimation(element, 800);
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
      '--txtcolor': '#FDFDFD',
      '--strokecolor': '#1f2123',
      '--darkTxtColor': '#bbb5ac',
      '--myblue': '#72B4EA',
      '--mygradient': 'linear-gradient(130deg, #003E5C 10%,  #011926 70%)',
      '--negative': '1'
    };
  } else {
    variables = {
      '--bgcolor': '#fefefe',
      '--txtcolor': '#0D0D0D',
      '--strokecolor': '#f3f3f3',
      '--darkTxtColor': '#423D51',
      '--myblue': '#5BA8E7',
      '--negative': '0',
      '--mygradient': 'linear-gradient(130deg, #3F85AB 10%,  #003E5C 70%)'
    };
  }
  setVariables(variables);

  localStorage.setItem("theme", theme);
}


function burguerClick() {
  if (isInAnimation(container)) return;
  addAnimation(container);
  if (container.classList.contains("burguer_passive")) {
    changeBurgState(true);
    ncontents.style.display = "flex";
    ncontents.style.animation = "scaling 0.3s ease-in 1";
  } else {
    ncontents.style.animation = "reverse_scaling 0.3s ease-in";
    setTimeout(() => {
    changeBurgState(false);
    ncontents.style.display = "none";
    }, 290);
  }


  /*const nav = document.getElementById("navbar");
  nav.classList.toggle("change");
  const navItems = document.getElementById("navbar_items");
  navItems.classList.toggle("change");*/
}

function isInAnimation(element) {
  return element.classList.contains("in_animation");
}

function addAnimation(element, time=300) {
  element.classList.add("in_animation");
  setTimeout(() => {
    element.classList.remove("in_animation");
  }, time);
}

function changeBurgState(highlight) {
  if (highlight) {
    container.classList.add("burguer_active");
    container.classList.remove("burguer_passive");
  } else {
    container.classList.add("burguer_passive");
    container.classList.remove("burguer_active");
  }
}