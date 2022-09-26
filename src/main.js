getData();
const form = document.querySelector('[data-js="form"');

const submitHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  getData(data.filter);
};

form.addEventListener("submit", submitHandler);

function getData(status = "") {
  const apiURL = `https://rickandmortyapi.com/api/character/?status=${status}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      createCard(data.results);
    });
}

const createCard = (dataArray) => {
  const main = document.querySelector(".main");

  dataArray.map((data) => {
    console.log(data);
    const card = document.createElement("article");
    card.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card_img");
    cardImg.src = data.image;
    card.append(cardImg);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = data.name;
    card.append(cardTitle);

    main.append(card);
  });
};
