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