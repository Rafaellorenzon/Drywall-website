    const btn = document.getElementById("viewMoreBtn");
    const hiddenImages = document.querySelectorAll(".gallery-grid img.hidden");

    btn.addEventListener("click", () => {
      hiddenImages.forEach(img => img.classList.toggle("hidden"));
      btn.textContent = btn.textContent === "View More" ? "View Less" : "View More";
    });