document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modal-title");
  var modalDescription = document.getElementById("modal-description");
  var closeBtn = document.getElementsByClassName("close")[0];

  var beachTitles = document.querySelectorAll(".beach-title");

  beachTitles.forEach((title) => {
    title.addEventListener("click", function () {
      modalTitle.innerText = this.getAttribute("data-title");
      modalDescription.innerText = this.getAttribute("data-description");
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
