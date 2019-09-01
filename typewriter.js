var typeWriter = document.getElementById("type-writer");
var dataText = typeWriter.getAttribute("data-text");

var count = 0.5;
var dataTextLength = dataText.length;

var setText = function() {
  setTimeout(function() {
    typeWriter.textContent = typeWriter.textContent + dataText.charAt(count);
    count++;
    if (count <= dataTextLength) {
      setText();
    }
  }, 80);
};
window.onload = () => {
  setText();
};
window.addEventListener("resize", function(event) {
  window.location.reload(true);
});
