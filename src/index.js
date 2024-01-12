function handleSubmit(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Dans le ciel azuré, Les étoiles s'embrassent, Un doux rêve en suspens, Elégance céleste enchantée.",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", handleSubmit);
