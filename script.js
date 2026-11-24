document.addEventListener("DOMContentLoaded", function () {
  // Footer year
  document.querySelectorAll(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle"), links = document.querySelector(".nav-links");
  toggle.addEventListener("click", function () {
    toggle.setAttribute("aria-expanded", links.classList.toggle("open"));
  });

  // Contact form validation (browser only, nothing is sent)
  var form = document.getElementById("contact-form"), fb = document.getElementById("form-feedback");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        var bad = !f.value.trim() || (f.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
        f.classList.toggle("invalid", bad);
        if (bad) ok = false;
      });
      fb.className = "form-feedback " + (ok ? "ok" : "error");
      fb.textContent = ok ? "Thanks. This is a demo site, so your message was checked but not sent." : "Please fill in every field with a valid email address.";
      if (ok) form.reset();
    });
  }
});
