export const createCard = (pokemon) => {
  const container = document.querySelector(".container");
  const { id, name, types, image } = pokemon;

  let typesElement = "";
  types.forEach(type => {
    typesElement += /* html */`<div class="type">${type}</div>`;
  });
  // ? otra forma con map
  // const typesElement = types.map(type => `<div>${type}</div>`).join("");
  const pokeName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const cardElement = /* html */`
    <div class="card">
      <img class="image" src="${image}" alt="${pokeName}">
      <div class="data">
        <h1 class="name">${id}-${pokeName}</h1>
        <div class="types">
          ${typesElement}
        </div>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", cardElement);
};
