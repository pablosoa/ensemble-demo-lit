/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */

const INFO = [
  { statistic: "", description: "" },
  { statistic: "", description: "" },
  {
    statistic: "200+",
    description: "EMPLOYEES",
  },
  { statistic: "", description: "" },
  {
    statistic: "4",
    description: "GLOBAL OFFICES",
  },
  {
    statistic: "100+",
    description: "CLIENTS",
  },
  {
    statistic: "1995",
    description: "ESTABLISHED",
  },
  {
    statistic: "500+",
    description: "PROJECTS DELIVERED",
  },
  { statistic: "", description: "" },
];

export default async function decorate(block) {
  const h1 = block.querySelector("h1");
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
  const infoSection = document.createElement("div");
  infoSection.className = "info-section";

  infoSection.innerHTML = INFO.map((i, idx) => {
    if (!i.statistic && !i.description) {
      return `<div class='blank block-${idx}'></div>`;
    } else {
      return `<a href='https://www.ensemble.com/'><div class='block-${idx}'><p class='statistic-text'>${i.statistic}</p><p class='description'>${i.description}</p></div></a>`;
    }
  }).join("");
  block.appendChild(infoSection);
}
