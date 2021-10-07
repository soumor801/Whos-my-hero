//============================ Superhero API call =========================

let submitButton = document.querySelector(".search-submit");
submitButton.addEventListener("click", () => {
  console.log("clicked");
  let imgSuper = document.querySelector(".super");

  let superheroName = document.querySelector(".search-input").value;
  console.log(superheroName);

  document.querySelector(".search-input").value = "";

  fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${superheroName}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "a6f21e6ebfmsh0e902e8339d9828p151c6djsnc6fae22bf890",
    },
  })
    .then((superHero) => {
      return superHero.json();
    })

    .then((superHeroJSON) => {
      console.log(superHeroJSON);
      let superHero = superHeroJSON;
      showSuperHero(superHeroJSON);
    })
    .catch((err) => {
      alert('Hmmm...Are you sure you typed that hero correctly? Try entering a different hero!' );
    });
});
// ======================= load superhero and append to the page ====
const showSuperHero = (superHeroData) => {
  console.log(superHeroData);

  document.querySelector(".superhero-name").innerText = `${superHeroData.name}`;
  console.log(superHeroData);

  document.querySelector(
    "#superhero-body"
  ).innerText = `${superHeroData.biography.fullName}`;
  console.log(superHeroData);

  document.querySelector(".superhero-img").src = superHeroData.images.lg;

  console.log(superHeroData.images.md);

  document.querySelector(
    ".superhero-p"
  ).innerText = `${superHeroData.connections.groupAffiliation}`;

  document.querySelector(
    ".superhero-stats"
  ).innerText = `${superHeroData.work.occupation}`;
};
