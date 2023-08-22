export default function decorate(block) {
  const carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel-div";
  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapper-div";
  wrapperDiv.id = "wrapper-div";
  wrapperDiv.innerHTML = block.innerHTML;

  const arrowDiv = document.createElement("div");
  arrowDiv.className = "arrow-div";
  const buttonLeft = document.createElement("button");
  buttonLeft.innerHTML = "<img src='../../icons/leftArrow.svg'/>";
  const buttonRight = document.createElement("button");
  buttonRight.innerHTML = "<img src='../../icons/rightArrow.svg'/>";

  arrowDiv.append(buttonLeft);
  arrowDiv.append(buttonRight);
  block.innerHTML = "";
  carouselDiv.append(wrapperDiv);
  block.append(carouselDiv);
  block.append(arrowDiv);

  buttonRight.addEventListener("click", function () {
    carouselDiv.scroll({
      left: carouselDiv.scrollLeft + carouselDiv.offsetWidth,
      behavior: "smooth",
    });
  });

  buttonLeft.addEventListener("click", function () {
    carouselDiv.scroll({
      left: carouselDiv.scrollLeft - carouselDiv.offsetWidth,
      behavior: "smooth",
    });
  });
}
