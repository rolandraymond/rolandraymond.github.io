/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navbarList = document.getElementById("navbar__list");

//Create 4 li to navbar

for (i = 1; i <= 4; i++) {
  let li = document.createElement("li");

  li.classList.add("menu__link");
  //make id to li
  li.setAttribute("id", "navbarSection" + [i]);

  var tess = document.getElementById("navbar__list");
  //add to navbar
  tess.appendChild(li);
  li.innerHTML = "Section" + [i];

  // make link
}
var linkTag = document.getElementById("navbarSection1");
linkTag.innerHTML = "<a href=#section1 > HOME" + "</a>";

var linkTag = document.getElementById("navbarSection2");
linkTag.innerHTML = "<a href=#section2 > electromechanical" + "</a>";

var linkTag = document.getElementById("navbarSection3");
linkTag.innerHTML = "<a href=#section3 > Energy management" + "</a>";

var linkTag = document.getElementById("navbarSection4");
linkTag.innerHTML = "<a href=#section4 > Advanced  solutions" + "</a>";
//add react to viewport

let scorllReact = document.querySelectorAll("section");
// add Area for section
const option = {
  threshold: 0.5,
  rootMargin: "50px",
};
// add function for all section
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((element) => {
    //  true
    if (element.isIntersecting) {
      // will react with this area
      element.target.classList.add("your-active-class");
      // for test
      console.log(element);
    } else {
      // disable react to viewport
      element.target.classList.remove("your-active-class");
    }
  });
}, option);
scorllReact.forEach((section) => {
  observer.observe(section);
});

//add smooth scroll
const linkul = document.querySelectorAll("a");

for (const onelink of linkul) {
  onelink.addEventListener("click", clickSensor);
}

function clickSensor(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
