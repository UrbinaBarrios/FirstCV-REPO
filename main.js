/* mi mejor intento de progress bar */

data = {
  task1: {
    progress: 0.2,
    name: "Python",
  },
  task2: {
    progress: 0.4,
    name: "Java",
  },
  task3: {
    progress: 0.9,
    name: "HTML",
  },
  task4: {
    progress: 0.4,
    name: "Javascript",
  },
  task5: {
    progress: 0.5,
    name: "CSS",
  },
};

wraper_progressbar = document.querySelector(".wraper-progressbar");
wp = wraper_progressbar;

for (task in data) {
  elem_label = document.createElement("label");

  elem_span = document.createElement("span");

  elem_span_text = document.createTextNode(data[task].name);

  elem_div_task = document.createElement("div");
  elem_div_task.setAttribute("id", "task");
  elem_div_task.classList.add("task");

  elem_div_progress = document.createElement("div");
  elem_div_progress.classList.add("progress");

  progress = data[task].progress;
  position = 272 * progress;
  elem_div_progress.style.left = position + "px";
  if (progress < 0.25) {
    elem_div_progress.classList.add("progress-red");
  } else if (progress < 0.75) {
    elem_div_progress.classList.add("progress-orange");
  } else {
    elem_div_progress.classList.add("progress-green");
  }

  elem_div_tooltip = document.createElement("div");
  elem_div_tooltip.classList.add("tooltip");
  elem_div_tooltip_text = document.createTextNode(progress * 100 + " %");

  elem_span.appendChild(elem_span_text);
  elem_label.appendChild(elem_span);
  elem_div_tooltip.appendChild(elem_div_tooltip_text);
  elem_div_progress.appendChild(elem_div_tooltip);
  elem_div_task.appendChild(elem_div_progress);
  elem_label.appendChild(elem_div_task);

  wp.appendChild(elem_label);
}

/* lo intente depana que si */

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImgs = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

let counter = 1;
const size = carouselImgs[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImgs.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImgs[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImgs.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImgs[counter].id == "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImgs.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
