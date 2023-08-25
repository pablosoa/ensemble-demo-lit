/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */

export default async function decorate(block) {
  const h1 = block.querySelector("h1");
  const href = h1.querySelector("a");
  h1.innerHTML = "";
  const animationText = document.createElement("h1");
  const listOfFunctions = [
    "DEVELOP",
    "DESIGN",
    "DRIVE",
    "DOCUMENT",
    "DEBUG",
    "DEPLOY",
  ];
  let currentText = listOfFunctions[listOfFunctions.length - 1];
  const random = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    while (listOfFunctions[randomNumber] === currentText) {
      randomNumber = Math.floor(Math.random() * 5);
    }
    currentText = listOfFunctions[randomNumber];
  };

  setInterval(() => {
    random();
    animationText.innerHTML = `<p>WE <span id='list-functions'></span></p> <p>ALL THINGS</p> DIGITAL`;
    const listFunctions = animationText.querySelector("#list-functions");
    let i = 0;
    let reverse = false;
    let result = "";
    const changeText = setInterval(async () => {
      listFunctions.innerHTML = result;
      if (reverse) {
        i--;
        result = result.slice(0, i);
      } else {
        if (currentText[i]) {
          result += currentText[i];
          i++;
        }
      }
      if (i >= currentText.length) {
        setTimeout(() => {
          reverse = true;
        }, 500);
      }
      if (i < 0 && reverse) {
        clearInterval(changeText);
        reverse = false;
      }
    }, 1400 / (currentText.length * 2));

    h1.replaceWith(animationText);
  }, 2500);
  // create info section
  const { pathname } = new URL(href);
  const resp = await fetch(pathname);
  const json = await resp.json();
  const data = [
    {},
    {},
    json.data[0],
    {},
    json.data[1],
    json.data[2],
    json.data[3],
    json.data[4],
    {},
  ];
  const infoSection = document.createElement("div");
  infoSection.className = "info-section";

  infoSection.innerHTML = data
    .map((i, idx) => {
      if (!i.stat && !i.description) {
        return `<div class='blank block-${idx}'></div>`;
      } else {
        return `<a href='${i.path}'><div class='block-${idx}'><p class='statistic-text'>${i.stat}</p><p class='description'>${i.description}</p></div></a>`;
      }
    })
    .join("");
  block.appendChild(infoSection);
}
