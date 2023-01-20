const logo = document.querySelector("#navbar_logo")
const navbar = document.querySelector(".navbar")
const items = document.querySelectorAll(".navbar_item")

const lang = document.querySelector("#dropbtn")
const root = document.querySelector(':root');


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

function changeTheme() {
  const element = document.getElementById("theme")
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
  /*const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
  const myVariables = {
    '--color-primary-50': '#eff6ff',
    '--color-primary-100': '#dbeafe',
    '--color-primary-200': '#bfdbfe',
    '--color-primary-300': '#93c5fd',
    '--color-primary-400': '#60a5fa',
    '--color-primary-500': '#3b82f6',
    '--color-primary-600': '#2563eb',
    '--color-primary-700': '#1d4ed8',
    '--color-primary-800': '#1e40af',
    '--color-primary-900': '#1e3a8a',
  };
  setVariables(myVariables);*/
  

  // set css variable
  if (theme == "dark") {
    root.style.setProperty('--bgcolor', '#181a1b');
    root.style.setProperty('--strokecolor', '#1f2123');
    root.style.setProperty('--darkTxtColor', '#bbb5ac');
    root.style.setProperty('--mygradient', 'linear-gradient(130deg, #003E5C 10%,  #011926 70%)');
  } else {
    root.style.setProperty('--bgcolor', '#fefefe');
    root.style.setProperty('--strokecolor', '#f3f3f3');
    root.style.setProperty('--darkTxtColor', '#423D51');
    root.style.setProperty('--mygradient', 'linear-gradient(130deg, #3F85AB 10%,  #003E5C 70%)');
  }
}