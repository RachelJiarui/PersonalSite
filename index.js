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

  document.getElementById("table-view").classList.add("selected-nav")
  document.getElementById("gallery-view").classList.remove("selected-nav")
}

function selectMedia() {
  document.getElementById("gallery-view-body").classList.remove("not-selected");
  document.getElementById("gallery-view-body").classList.add("selected");

  document.getElementById("table-view-body").classList.add("not-selected");
  document.getElementById("table-view-body").classList.remove("selected");

  document.getElementById("table-view").classList.remove("selected-nav")
  document.getElementById("gallery-view").classList.add("selected-nav")
}