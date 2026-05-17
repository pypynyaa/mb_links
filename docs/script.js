const cards = document.querySelectorAll(".link-card");

cards.forEach((card, index) => {
  card.style.setProperty("--delay", `${index * 55}ms`);
});
