const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelector(".large-heading").onmouseover = event => {
  let iteration = 0;
  const targetElement = event.target;

  // Change text color to red
  targetElement.style.color = "red";

  clearInterval(interval);

  interval = setInterval(() => {
    targetElement.innerText = targetElement.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return targetElement.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if(iteration >= targetElement.dataset.value.length){
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 15);
}

// Reset text color to original on mouseout
document.querySelector(".large-heading").onmouseout = event => {
  event.target.style.color = "";
};
