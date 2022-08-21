var modal = document.getElementById("myModal");
var btn = document.getElementById("button__submit");
var span = document.getElementsByClassName("close")[0];

const radioButtons = document.querySelectorAll('input[name="rating"]');
btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedRating = radioButton.value;
            break;
        }
    }
    document.getElementById("rating__select").innerHTML = (selectedRating);
});

function rating() {
  modal.style.display = "block";

}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


