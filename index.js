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
