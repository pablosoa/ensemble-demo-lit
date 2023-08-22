/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */

export default async function decorate(block) {
  const h2 = block.querySelector("h2");
  h2.innerHTML = "";
  const animationText = document.createElement("h2");
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
    animationText.innerHTML = `<p>WE <span id='list-functions'></span></p> ALL THINGS DIGITAL`;
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

    h2.replaceWith(animationText);
  }, 2500);
}
