const cookieConsent = document.querySelector("#cookie-consent");
const acceptCookies = document.querySelector(".accept-cookies");
const declineCookies = document.querySelector(".decline-cookies");
const cookieParagraph = document.querySelector(".cookie-paragraph");
const cookieClose = document.querySelector(".cookie-close");
const cookieForm = document.querySelector("#cookie-form");
const cookieButtons = document.querySelector(".cookie-buttons")

setTimeout(() => {
  cookieConsent.style.display = "block";
}, 2000);

cookieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const consentFromData = new FormData(cookieForm);
  const userName = consentFromData.get("name");

  cookieParagraph.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="40" cy="100">
  <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
  </circle>
  <circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="100" cy="100">
  <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
  </circle>
  <circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="160" cy="100">
  <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
  </circle>
  </svg>
  <p class="submit-paragraph-1">
  Connecting to the dark Web
  </p>
  `;

  setTimeout(() => {
    const submitParagraph = document.querySelector(".submit-paragraph-1");
    submitParagraph.textContent = "Making the sales...";

    setTimeout(() => {
      cookieParagraph.innerHTML = `
      <img src="giphy.webp" class="troll-gif"/>
      <p class="submit-paragraph-2">
      Thanks Sucker or should I say <span id="user-name-formData">${userName}</span>? We just sold the rights to your eternal soul.
      </p>
      `;
      cookieClose.disabled = false;
    }, 2000);
  }, 2000);
});

cookieClose.addEventListener("click", () => {
  cookieConsent.style.display = "none";
});

["mouseenter", "click"].forEach((e) => {
  declineCookies.addEventListener(e, () => {
    cookieButtons.classList.toggle("reverse")
  })
})