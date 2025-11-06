document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  const scrollButtons = document.querySelectorAll("[data-scroll]");
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterFeedback = document.getElementById("newsletter-feedback");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      primaryNav.classList.toggle("is-open");
      const expanded = primaryNav.classList.contains("is-open");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetSelector = button.getAttribute("data-scroll");
      if (!targetSelector) return;
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = newsletterForm.email?.value?.trim();
      if (!email) {
        newsletterFeedback.textContent = "رجاءً أدخل بريدًا إلكترونيًا صحيحًا.";
        newsletterFeedback.style.color = "#ffccbb";
        return;
      }

      newsletterFeedback.textContent = "تم الاشتراك! سنرسل لك أحدث المقالات قريبًا.";
      newsletterFeedback.style.color = "#d4a941";
      newsletterForm.reset();
    });
  }
});
