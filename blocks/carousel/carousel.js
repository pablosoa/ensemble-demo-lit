import { createCarouselArrow } from "../../scripts/lib-franklin.js";

export default function decorate(block) {
  const carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel-div";
  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapper-div";
  wrapperDiv.id = "wrapper-div";
  wrapperDiv.innerHTML = block.innerHTML;

  const moveLeft = () => {
    carouselDiv.scroll({
      left: carouselDiv.scrollLeft - carouselDiv.offsetWidth,
      behavior: "smooth",
    });
  };
  const moveRight = () => {
    carouselDiv.scroll({
      left: carouselDiv.scrollLeft + carouselDiv.offsetWidth,
      behavior: "smooth",
    });
  };
  const arrowDiv = createCarouselArrow(moveLeft, moveRight);
  block.innerHTML = "";
  carouselDiv.append(wrapperDiv);
  block.append(carouselDiv);
  block.append(arrowDiv);
}
