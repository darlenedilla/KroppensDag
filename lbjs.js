var lightbox = document.getElementById('myLightbox');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When click, open the modal
btn.onclick = function() {
  lightbox.style.display = "block";
}

span.onclick = function() {
  lightbox.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == lightbox) {
    lightbox.style.display = "none";
  }
}
