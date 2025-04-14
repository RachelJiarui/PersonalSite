const ruminationDictionary = {
  "ON LEADERSHIP": {
    1: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    2: "2Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    3: "3An unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    4: "4Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    5: "5Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    6: "6Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    7: "7Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};

const ruminationFootNotes = {
  "ON LEADERSHIP": {
    1: "Footnote 1 Footnote 1 Footnawdawdaiojdao;iwjd;aoiwjd;aiwdote 1 Footnote 1 Footnote 1 Footnote 1 Footnote 1 Footnote 1 Footnote 1 Footnote 1 Footnote 1",
    4: "Footnote 4 Footnote 4 Footnote 4 Footnote 4asjda adajwoidjao;wjd;aj;wdia adwadaw 4 Footnote 4 Footnote 4 Footnote 4 Footnote 4 Footnote 4 Footnote 4 Footnote 4 Footnote 4 Footnote 4",
  },
};

function select() {
  document.getElementById("table-view").classList.toggle("not-selected");
  document.getElementById("gallery-view").classList.toggle("selected");
  document.getElementById("table-view").classList.toggle("not-selected");
  document.getElementById("gallery-view").classList.toggle("not-selected");
  document.getElementById("ruminations-view").classList.add("not-selected");

  document.getElementById("table-view-body").classList.toggle("not-selected");
  document.getElementById("gallery-view-body").classList.toggle("selected");
  document.getElementById("table-view-body").classList.toggle("not-selected");
  document.getElementById("gallery-view-body").classList.toggle("not-selected");
  document
    .getElementById("ruminations-view-body")
    .classList.add("not-selected");
}

function selectResume() {
  document.getElementById("gallery-view-body").classList.remove("selected");
  document.getElementById("gallery-view-body").classList.add("not-selected");

  document.getElementById("table-view-body").classList.add("selected");
  document.getElementById("table-view-body").classList.remove("not-selected");

  document.getElementById("technical-view-body").classList.add("not-selected");
  document.getElementById("technical-view-body").classList.remove("selected");

  document
    .getElementById("ruminations-view-body")
    .classList.add("not-selected");
  document.getElementById("ruminations-view-body").classList.remove("selected");
}

function selectMedia() {
  document.getElementById("gallery-view-body").classList.remove("not-selected");
  document.getElementById("gallery-view-body").classList.add("selected");

  document.getElementById("table-view-body").classList.add("not-selected");
  document.getElementById("table-view-body").classList.remove("selected");

  document.getElementById("technical-view-body").classList.add("not-selected");
  document.getElementById("technical-view-body").classList.remove("selected");

  document
    .getElementById("ruminations-view-body")
    .classList.add("not-selected");
  document.getElementById("ruminations-view-body").classList.remove("selected");
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

  document
    .getElementById("ruminations-view-body")
    .classList.add("not-selected");
  document.getElementById("ruminations-view-body").classList.remove("selected");
}

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".menu-item.selected")?.classList.remove("selected");
    item.classList.add("selected");
  });
});

function setupTechnicalClicks() {
  const reader = document.getElementById("technical-reader");
  const readerTechTitle = document.getElementById("reader-tech-title");
  const projectLink = document.getElementById("project-link");
  const readerSubtitle = document.getElementById("reader-subtitle");
  const readerPurposeBody = document.getElementById("reader-purpose-body");
  const readerDesignBody = document.getElementById("reader-design-body");
  const readerReflectionsBody = document.getElementById(
    "reader-reflections-body",
  );

  const backBtn = document.getElementById("back-tech-button");

  document.querySelectorAll(".technical-box").forEach((box) => {
    box.addEventListener("click", () => {
      const title = box.querySelector(".title-role")?.innerText || "";
      const body = box.querySelector(".desc")?.innerText || "";

      document.getElementById("reader-title").innerText = title;
      document.getElementById("reader-body").innerHTML = `<p>${body}</p>`;

      const reader = document.getElementById("technical-reader");
      reader.style.display = "block";
      void reader.offsetWidth;
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
}

document.addEventListener("DOMContentLoaded", () => {
  setupTechnicalClicks();
  const reader = document.getElementById("rumination-reader");
  const backBtn = document.getElementById("back-button");
  const readerTitle = document.getElementById("reader-title");
  const readerBody = document.getElementById("reader-body");

  document.querySelectorAll(".rumination-box").forEach((box) => {
    box.addEventListener("click", async () => {
      const title = box.querySelector(".rumination-title")?.innerText || "";
      const paragraphs = ruminationDictionary[title];
      const footnotes = ruminationFootNotes[title] || {};

      readerTitle.innerText = title;

      if (!paragraphs) {
        readerBody.innerHTML = `<p class="rumination-paragraph">Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later. Work in progress. Come back later.</p>`;
      } else {
        readerBody.innerHTML = Object.entries(paragraphs)
          .map(([index, text]) => {
            const footnote = footnotes[index];
            const hasFootnote = footnote !== undefined;

            const footnoteHTML = hasFootnote
              ? `<span class="footnote ${
                  index % 2 === 0 ? "left" : "right"
                }">[${index}] ${footnote}</span>`
              : "";

            return `
              <div class="paragraph-wrapper">
                ${index % 2 === 0 ? footnoteHTML : ""}
                <p class="rumination-paragraph">${text}</p>
                ${index % 2 !== 0 ? footnoteHTML : ""}
              </div>`;
          })
          .join("");
      }

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
