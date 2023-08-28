import { createCarouselArrow } from "../../scripts/lib-franklin.js";

var smallSize = window.matchMedia("(max-width: 768px) ");

export default async function decorate(block) {
  let limit = 0;
  let offset = 0;
  let total = 0;

  const href = block.querySelector("a").href;
  const { pathname } = new URL(href);
  const div = block.querySelector("div");
  div.className = "list-customers";

  async function fetchCustomerLogos() {
    const resp = await fetch(pathname + `?limit=${limit}&offset=${offset}`);
    const json = await resp.json();
    div.innerHTML = "";
    json.data.forEach((customer) => {
      const image = document.createElement("img");
      image.src = customer.image;
      image.alt = customer.name;
      div.appendChild(image);
    });
    total = json.total;
  }

  function checkDeviceSize() {
    if (smallSize.matches) {
      limit = 6;
    } else {
      limit = 9;
    }
    offset = 0;
    fetchCustomerLogos();
  }

  checkDeviceSize();
  smallSize.addEventListener("change", () => {
    checkDeviceSize();
  });

  const moveLeft = async () => {
    if (offset > 0) {
      offset -= limit;
      fetchCustomerLogos();
    }
  };
  const moveRight = async () => {
    if (offset < total - limit) {
      offset += limit;
      fetchCustomerLogos();
    }
  };
  const arrowDiv = createCarouselArrow(moveLeft, moveRight);
  block.append(arrowDiv);
}
