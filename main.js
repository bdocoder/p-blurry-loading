/** @type {HTMLSpanElement} */
const span = document.querySelector(".loading-text");
/** @type {HTMLImageElement} */
const image = document.querySelector(".bg-image");
const computed = getComputedStyle(image);

const initialBlur = 30;

const animateImage = () => {
  image.classList.add("animate");
};
if (image.complete) animateImage();
else {
  image.onload = animateImage;
}

const updateText = () => {
  const filterValue = computed.getPropertyValue("filter");
  const blur = +filterValue.substring(5, filterValue.length - 3);
  if (Number.isNaN(blur)) {
    span.style.opacity = 0;
    return;
  }

  const percentage = (blur * 100) / initialBlur;
  span.textContent = Math.floor(100 - percentage) + "%";
  span.style.opacity = percentage / 100;

  requestAnimationFrame(updateText);
};

requestAnimationFrame(updateText);
