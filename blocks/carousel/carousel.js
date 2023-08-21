export default function decorate(block) {
  const carouselWrapper = document.createElement("div");
  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapperDiv";
  wrapperDiv.id = "wrapperDiv";
  wrapperDiv.innerHTML = block.innerHTML;

  const arrowDiv = document.createElement("div");
  arrowDiv.className = "arrowDiv";
  const buttonLeft = document.createElement("button");
  buttonLeft.innerHTML = "<img src='../../icons/leftArrow.svg'/>";
  const buttonRight = document.createElement("button");
  buttonRight.innerHTML = "<img src='../../icons/rightArrow.svg'/>";

  arrowDiv.append(buttonLeft);
  arrowDiv.append(buttonRight);
  carouselWrapper.append(wrapperDiv);
  carouselWrapper.append(arrowDiv);
  block.replaceWith(carouselWrapper);

  // move carousel
  let position = 0;
  function moveCarousel() {
    // const wrapperDivWidth = document.getElementById("wrapperDiv").offsetWidth;
    // const carouselDivWidth =
    //   document.getElementsByClassName("carousel-wrapper")[0].offsetWidth;
    wrapperDiv.style.transform = `translateX(-${
      position * document.body.offsetWidth
    }px)`;
    // buttonRight.disabled =
    //   carouselDivWidth - position * document.body.offsetWidth <= 0;
    buttonLeft.disabled = position === 0;
  }

  buttonRight.addEventListener("click", function () {
    position = Math.min(position + 1, wrapperDiv.children.length - 3);
    moveCarousel();
  });

  buttonLeft.addEventListener("click", function () {
    position = Math.max(position - 1, 0);
    moveCarousel();
  });
}
