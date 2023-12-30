const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");
const scrollToTopButton = document.querySelector(".scroll-to-top");



const refreshButtonVisibility = () => {
  let viewportHeight = window.innerHeight;
  if (document.documentElement.scrollTop < viewportHeight/2) {
    scrollToTopButton.style.display = "none";
  } else {
    scrollToTopButton.style.display = "block";
  }
};
refreshButtonVisibility();

scrollToTopButton.addEventListener("click", () =>{
  window.scrollTo(0, 0);
})

document.addEventListener("scroll", () =>{
  refreshButtonVisibility()
})

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
