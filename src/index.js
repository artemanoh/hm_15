const imageList = document.querySelector(".image-list");
const button = document.querySelector(".button");

let currentPage = 1;
const photoPerPage = 5;

const makeImageList = (images) => {
  return images.map((image) => {
    return `
      <li>
        <img src="${image.webformatURL}" />
        <button class="like" aria-label="Like">&#10084;</button>
        <span class="like-count">0</span>
      </li>
    `;
  }).join("");
};

const fetchImages = () => {
  fetch(`https://pixabay.com/api/?key=50834834-38d93ed52f356f352f281d28a&per_page=${photoPerPage}&page=${currentPage}`)
    .then((response) => response.json())
    .then((data) => {
      imageList.insertAdjacentHTML("beforeend", makeImageList(data.hits));
    });
};

button.addEventListener("click", () => {
  currentPage++;
  fetchImages();
});


imageList.addEventListener("click", (event) => {
  if (event.target.classList.contains("like")) {
    const like = event.target;
    const countElem = like.nextElementSibling;
    let count = parseInt(countElem.textContent, 10);
    count++;
    countElem.textContent = count;

    like.classList.add("clicked");
    setTimeout(() => like.classList.remove("clicked"), 400);
  }
});

fetchImages();
