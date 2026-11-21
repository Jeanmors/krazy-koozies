(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  var year = document.querySelector("#year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.querySelector("#order-form");
  var success = document.querySelector("#form-success");

  if (form && success) {
    // Hook this form up to a service like Formspree (or similar) before going live.
    // This submit handler is front-end only and does not send the order anywhere.
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      form.hidden = true;
      form.style.display = "none";
      success.hidden = false;
      success.classList.add("is-visible");
      success.focus();
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
