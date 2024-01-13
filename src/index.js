function handleSubmit(event) {
  event.preventDefault();
  poem.classList.remove("hidden");
  poem.innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse fa-2xl" style="color: #9bbec8;"></i>`;
  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = "26fa1d65306c6427fb2f815to8d8b867";
  let prompt = `Generate a poem about ${userInstructions.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a four-line stanza in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showResults);
}

function showResults(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let poem = document.querySelector("#poem");
let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", handleSubmit);
