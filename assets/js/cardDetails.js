import { searchForCountry } from "../api/countryServices.js";
import { displayCardDetailsHTMLContent } from "../display/cardDetails.js";
import { isDarkModeCheckedInLocalStorage } from "../utils/darkModeState.js";

const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get("card");
const cardContent = document.getElementById("cardContent");

const cardDetailsLoaderCSSLink = document.querySelector(
  'link[href="/assets/css/cardDetails_Loader.css"]'
);

const darkModeBtn = document.getElementById("darkMode");

darkModeBtn.addEventListener("change", () => {
  localStorage.setItem("darkModeState", darkModeBtn.checked);
});

// Window onload bring all of the data from API

window.addEventListener("load", async (event) => {
  // taking the state of dark mode from local storage
  isDarkModeCheckedInLocalStorage(darkModeBtn);

  displayCardDetailsHTMLContent(
    await searchForCountry(country),
    cardContent,
    cardDetailsLoaderCSSLink
  );
});