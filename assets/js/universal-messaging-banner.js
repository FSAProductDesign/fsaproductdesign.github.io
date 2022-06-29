function createModifyBannerUserPreference() {
  let coronaMessageElement = document.querySelector("#fsa_Banner_Message_Dark");
  let studentAidLinkElement = document.querySelector("#fsa_Banner_Link_Dark");
  let buttonTextElement = document.querySelector("#fsa_Show_Hide_Button_Text_Dark");
  let plusMinusSquareIconElement = document.querySelector(
    "#fsa_Minus_Plus_Square_Icon_Dark"
  );
  let bannerHeaderElement = document.querySelector("#fsa_Banner_Header_Dark");
  if (localStorage.getItem("stayClosed") === "true") {
    buttonTextElement.textContent = "Show";
    coronaMessageElement.remove();
    studentAidLinkElement.remove();
    plusMinusSquareIconElement.setAttribute(
      "class",
      "far fa-plus-square fsa-plus-square-icon-dark"
    );
    bannerHeaderElement.style.overflow = "hidden";
    bannerHeaderElement.style.whiteSpace = "nowrap";
  } else {
    localStorage.setItem("stayClosed", "false");
  }
}

function darkBanner() {
  createModifyBannerUserPreference();
  let bannerLinkDarkDiv = document.createElement("div");
  bannerLinkDarkDiv.className = "fsa-banner-link-dark";
  bannerLinkDarkDiv.id = "fsa_Banner_Link_Dark";
  let bannerLinkDarkHyperLink = document.createElement("a");
  bannerLinkDarkHyperLink.href = "#";
  bannerLinkDarkHyperLink.className = "fsa-link-color-dark";
  let hyperLinkDarkTextContent = document.createTextNode(
    "Visit StudentAid.gov/coronavirus for updates"
  );
  bannerLinkDarkHyperLink.appendChild(hyperLinkDarkTextContent);
  let bannerLinkDarkIcon = document.createElement("i");
  bannerLinkDarkIcon.className = "fas fa-external-link fsa-arrow-icon";
  bannerLinkDarkHyperLink.append(bannerLinkDarkIcon);
  bannerLinkDarkDiv.append(bannerLinkDarkHyperLink);
  let messageDarkP = document.createElement("p");
  messageDarkP.className = "fsa-message-dark";
  messageDarkP.id = "fsa_Banner_Message_Dark";
  let messageDarkPTextContent = document.createTextNode(
    "President Trump has directed the Secretary of Education to extend federal student loan flexibilities for the COVID-19 emergency through Dec. 31, 2020. We are updating our websites and systems as quickly as possible to explain the types of relief now available for federal student loans held by the Department of Education. We appreciate your patience."
  );
  messageDarkP.appendChild(messageDarkPTextContent);
  let buttonText = document.querySelector("#fsa_Show_Hide_Button_Text_Dark");
  let showButton = document.getElementsByClassName("fsa-show-hide-button-dark");
  let banner = document.querySelector("#fsa_Messaging_Banner_Dark");
  let plusMinusSquareIcon = document.querySelector(
    "#fsa_Minus_Plus_Square_Icon_Dark"
  );
  let bannerHeaderDark = document.querySelector("#fsa_Banner_Header_Dark");
  let i;
  for (i = 0; i < showButton.length; i++) {
    showButton[i].addEventListener("click", function () {
      if (buttonText.textContent === "Show") {
        banner.appendChild(messageDarkP);
        banner.appendChild(bannerLinkDarkDiv);
        buttonText.textContent = "Hide";
        plusMinusSquareIcon.setAttribute(
          "class",
          "far fa-minus-square fsa-minus-square-icon-dark"
        );
        bannerHeaderDark.style.overflow = "revert";
        bannerHeaderDark.style.whiteSpace = "revert";
        localStorage.setItem("stayClosed", "false");
      } else {
        let coronaMessage = document.querySelector("#fsa_Banner_Message_Dark");
        let studentAidLink = document.querySelector("#fsa_Banner_Link_Dark");
        buttonText.textContent = "Show";
        coronaMessage.remove();
        studentAidLink.remove();
        plusMinusSquareIcon.setAttribute(
          "class",
          "far fa-plus-square fsa-plus-square-icon-dark"
        );
        bannerHeaderDark.style.overflow = "hidden";
        bannerHeaderDark.style.whiteSpace = "nowrap";
        localStorage.setItem("stayClosed", "true");
      }
    });
  }
}
darkBanner();

function createModifyBannerUserPreferenceLight() {
  let coronaMessageLightElement = document.querySelector("#fsa_Banner_Message_Light");
  let studentAidLinkLightElement = document.querySelector("#fsa_Banner_Link_Light");
  let buttonTextLightElement = document.querySelector(
    "#fsa_Show_Hide_Button_Text_Light"
  );
  let plusMinusSquareIconLightElement = document.querySelector(
    "#fsa_Minus_Plus_Square_Icon_Light"
  );
  let bannerHeaderLightElement = document.querySelector("#fsa_Banner_Header_Light");
  if (localStorage.getItem("stayClosedLight") === "true") {
    buttonTextLightElement.textContent = "Show";
    coronaMessageLightElement.remove();
    studentAidLinkLightElement.remove();
    plusMinusSquareIconLightElement.setAttribute(
      "class",
      "far fa-plus-square fsa-plus-square-icon-light"
    );
    bannerHeaderLightElement.style.overflow = "hidden";
    bannerHeaderLightElement.style.whiteSpace = "nowrap";
  } else {
    localStorage.setItem("stayClosedLight", "false");
  }
}

function lightBanner() {
  createModifyBannerUserPreferenceLight();
  let bannerLinkLightDiv = document.createElement("div");
  bannerLinkLightDiv.className = "fsa-banner-link-light";
  bannerLinkLightDiv.id = "fsa_Banner_Link_Light";
  let bannerLinkLightHyperLink = document.createElement("a");
  bannerLinkLightHyperLink.href = "#";
  bannerLinkLightHyperLink.className = "fsa-link-color-light";
  let hyperLinkLightTextContent = document.createTextNode(
    "Visit StudentAid.gov/coronavirus for updates"
  );
  bannerLinkLightHyperLink.appendChild(hyperLinkLightTextContent);
  let bannerLinkLightIcon = document.createElement("i");
  bannerLinkLightIcon.className = "fas fa-external-link fsa-arrow-icon";
  bannerLinkLightHyperLink.append(bannerLinkLightIcon);
  bannerLinkLightDiv.append(bannerLinkLightHyperLink);
  let messageLightP = document.createElement("p");
  messageLightP.className = "fsa-message-light";
  messageLightP.id = "fsa_Banner_Message_Light";
  let messageLightPTextContent = document.createTextNode(
    "President Trump has directed the Secretary of Education to extend federal student loan flexibilities for the COVID-19 emergency through Dec. 31, 2020. We are updating our websites and systems as quickly as possible to explain the types of relief now available for federal student loans held by the Department of Education. We appreciate your patience."
  );
  messageLightP.appendChild(messageLightPTextContent);
  let buttonTextLight = document.querySelector("#fsa_Show_Hide_Button_Text_Light");
  let showButtonLight = document.getElementsByClassName(
    "fsa-show-hide-button-light"
  );
  let bannerLight = document.querySelector("#fsa_Messaging_Banner_Light");
  let plusMinusSquareIconLight = document.querySelector(
    "#fsa_Minus_Plus_Square_Icon_Light"
  );
  let bannerHeaderLight = document.querySelector("#fsa_Banner_Header_Light");
  let i;
  for (i = 0; i < showButtonLight.length; i++) {
    showButtonLight[i].addEventListener("click", function () {
      if (buttonTextLight.textContent === "Show") {
        bannerLight.appendChild(messageLightP);
        bannerLight.appendChild(bannerLinkLightDiv);
        buttonTextLight.textContent = "Hide";
        plusMinusSquareIconLight.setAttribute(
          "class",
          "far fa-minus-square fsa-minus-square-icon-light"
        );

        bannerHeaderLight.style.overflow = "revert";
        bannerHeaderLight.style.whiteSpace = "revert";
        localStorage.setItem("stayClosedLight", "false");
      } else {
        let coronaMessageLight = document.querySelector(
          "#fsa_Banner_Message_Light"
        );
        let studentAidLinkLight = document.querySelector("#fsa_Banner_Link_Light");
        buttonTextLight.textContent = "Show";
        coronaMessageLight.remove();
        studentAidLinkLight.remove();
        plusMinusSquareIconLight.setAttribute(
          "class",
          "far fa-plus-square fsa-plus-square-icon-light"
        );
        bannerHeaderLight.style.overflow = "hidden";
        bannerHeaderLight.style.whiteSpace = "nowrap";
        localStorage.setItem("stayClosedLight", "true");
      }
    });
  }
}
lightBanner();
