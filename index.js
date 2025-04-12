function select() {
  document.getElementById("table-view").classList.toggle("selected");
  document.getElementById("gallery-view").classList.toggle("selected");
  document.getElementById("table-view").classList.toggle("not-selected");
  document.getElementById("gallery-view").classList.toggle("not-selected");

  document.getElementById("table-view-body").classList.toggle("selected");
  document.getElementById("gallery-view-body").classList.toggle("selected");
  document.getElementById("table-view-body").classList.toggle("not-selected");
  document.getElementById("gallery-view-body").classList.toggle("not-selected");
}

function selectResume() {
  document.getElementById("gallery-view-body").classList.remove("selected");
  document.getElementById("gallery-view-body").classList.add("not-selected");

  document.getElementById("table-view-body").classList.add("selected");
  document.getElementById("table-view-body").classList.remove("not-selected");

  document.getElementById("technical-view-body").classList.add("not-selected");
  document.getElementById("technical-view-body").classList.remove("selected");
}

function selectMedia() {
  document.getElementById("gallery-view-body").classList.remove("not-selected");
  document.getElementById("gallery-view-body").classList.add("selected");

  document.getElementById("table-view-body").classList.add("not-selected");
  document.getElementById("table-view-body").classList.remove("selected");

  document.getElementById("technical-view-body").classList.add("not-selected");
  document.getElementById("technical-view-body").classList.remove("selected");
}

function selectRuminations() {
  document.getElementById("gallery-view-body").classList.add("not-selected");
  document.getElementById("gallery-view-body").classList.remove("selected");

  document.getElementById("table-view-body").classList.add("not-selected");
  document.getElementById("table-view-body").classList.remove("selected");

  document.getElementById("technical-view-body").classList.add("not-selected");
  document.getElementById("technical-view-body").classList.remove("selected");

  document
    .getElementById("ruminations-view-body")
    .classList.remove("not-selected");
  document.getElementById("ruminations-view-body").classList.add("selected");
}

function selectTechnical() {
  document
    .getElementById("technical-view-body")
    .classList.remove("not-selected");
  document.getElementById("technical-view-body").classList.add("selected");

  document.getElementById("table-view-body").classList.add("not-selected");
  document.getElementById("table-view-body").classList.remove("selected");

  document.getElementById("gallery-view-body").classList.add("not-selected");
  document.getElementById("gallery-view-body").classList.remove("selected");
}

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".menu-item.selected")?.classList.remove("selected");
    item.classList.add("selected");
  });
});
function setupRuminationClicks() {
  document.querySelectorAll(".rumination-box").forEach((box) => {
    box.addEventListener("click", () => {
      const title = box.querySelector(".rumination-title")?.innerText || "";
      const body = box.querySelector(".rumination-desc")?.innerText || "";

      // Populate reader with content
      document.getElementById("reader-title").innerText = title;
      document.getElementById("reader-body").innerHTML = `<p>${body}</p>`;

      // Show animation
      document.getElementById("rumination-reader").classList.add("show");
    });
  });
}

// Run once on load
setupRuminationClicks();

document.addEventListener("DOMContentLoaded", () => {
  const reader = document.getElementById("rumination-reader");
  const backBtn = document.getElementById("back-button");
  const readerTitle = document.getElementById("reader-title");
  const readerBody = document.getElementById("reader-body");

  document.querySelectorAll(".rumination-box").forEach((box) => {
    box.addEventListener("click", () => {
      const title = box.querySelector(".rumination-title")?.innerText || "";
      const desc = box.querySelector(".rumination-desc")?.innerText || "";

      readerTitle.innerText = title;
      readerBody.innerHTML = `<p>${desc}</p>`;

      // Reset visibility
      reader.style.display = "block";

      // Force reflow to restart animation
      void reader.offsetWidth;

      // Then animate in
      reader.classList.remove("hiding");
      reader.classList.add("showing");
    });
  });

  backBtn.addEventListener("click", () => {
    reader.classList.remove("showing");
    reader.classList.add("hiding");

    // Wait for the animation to finish
    setTimeout(() => {
      reader.classList.remove("hiding");
      reader.style.display = "none";

      // Reset showing class to allow reanimation next time
      void reader.offsetWidth; // Trick to force reflow
    }, 600);
  });
});
