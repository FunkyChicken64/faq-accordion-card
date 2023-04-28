const detailList = document.querySelectorAll("details");

detailList.forEach((detail) => {
  detail.addEventListener("toggle", oneActiveDetail);
});

function oneActiveDetail() {
  if (this.open) {
    detailList.forEach((detail) => {
      if (detail != this) {
        detail.open = false;
      }
    });
  }
  detailList.forEach((detail) => {
    if (!detail.open) {
      detail.classList.remove("active");
    } else {
      detail.classList.add("active");
    }
  });
}
