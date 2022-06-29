function updateAccessibility(element) {
  let expanded = element.getAttribute('aria-expanded');
  if (expanded === 'true') {
    element.setAttribute('aria-expanded', false);
  } else {
    element.setAttribute('aria-expanded', true);
  }
}

function closeMobileMenu(element) {
  updateAccessibility(element);
  document.getElementById("fsa_Header_MobileMainHeader").classList.remove("fsa-hide");
  document.getElementById("fsa_Header_MobileNavMenu").classList.remove("fsa-show");
  let mobileNavContainer = document.getElementById("fsa_Header_MobileNav");
  let mobileElements = mobileNavContainer.querySelectorAll(".fsa-show");
  for (let mobileElement of mobileElements) {
    mobileElement.classList.remove('fsa-show');
    updateAccessibility(mobileElement);
  }
}

function openMobileMenu() {
  document.getElementById("fsa_Header_MobileMainHeader").classList.add("fsa-hide");
  document.getElementById("fsa_Header_MobileNavMenu").classList.add("fsa-show");
}

function toggleMobileAccordion(element) {
  updateAccessibility(element);
  element.classList.toggle("fsa-show");
  element.nextElementSibling.classList.toggle("fsa-show");
}

function toggleUserMenuActive(element) {
  updateAccessibility(element);
  element.classList.toggle("fsa-show");
  element.nextElementSibling.classList.toggle("fsa-show");
  document.addEventListener('click', function (event) {
    if (!document.getElementById('fsa_Nav_UserMenu').contains(event.target)) {
      updateAccessibility(element);
      element.classList.remove("fsa-show");
      element.nextElementSibling.classList.remove('fsa-show');
    }
  });
}

function toggleUserMobileMenu(element) {
  element.classList.toggle("fsa-show");
  element.nextElementSibling.classList.toggle("fsa-show");
  updateAccessibility(element);
}

function toggleSearch(element) {
  updateAccessibility(element);
  element.classList.toggle("fsa-show");
  element.nextElementSibling.classList.toggle("fsa-show");
  let searchElement = document.getElementById('fsa_Nav_Search');
  document.addEventListener('click', function (event) {
    let isClickInside = searchElement.contains(event.target);
    if (!isClickInside) {
      element.classList.remove("fsa-show");
      element.nextElementSibling.classList.remove('fsa-show');
      updateAccessibility(element);
    }
  });
}

function toggleNavMenuActive(element) {
  updateAccessibility(element);
  element.classList.toggle("fsa-show");
  element.parentElement.classList.toggle("fsa-show");
  element.parentElement.addEventListener("focusout", function (e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      element.classList.remove("fsa-show");
      element.parentElement.classList.remove("fsa-show");
      element.setAttribute('aria-expanded', false);
    }
  });
}

