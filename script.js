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
      let superHero = superHeroJSON
      
      // superheroArr = Object.entries(superHero);
      // superheroStats = Object.entries(superHero.powerstats)
      // superheroBio = Object.entries(superHero.biography)
      showSuperHero(superHeroJSON);
      // superheroImg = Object.entries(superHero.images.md)
      // for (let i = 0; len = superheroArr.length; i < len i++) {
      //   for (info in superheroArr[i])
      // }
      // console.log(superheroArr)

      // showSuperHero(superheroArr);
    })
    .catch((err) => {
      console.error(err);
    });
});

const showSuperHero = (superHeroData) => {
  console.log(superHeroData);
  const superHeroName = document.createElement("h2");
  superHeroName.innerHTML = '';

  const superHeroImg = document.createElement("img");
  superHeroImg.innerHTML = '';

  const superHeroBio = document.createElement("p");
  superHeroBio.innerHTML = '';

  const superHeroPowerStats = document.createElement("p");
  superHeroPowerStats.innerHTML = '';

  const superHeroJob = document.createElement("p");
  superHeroJob.innerHTML = '';
  
  
  superHeroName.innerText = superHeroData.name;
  superHeroBio.innerText = superHeroData.biography.fullName;
  superHeroImg.src = superHeroData.images.md;
  superHeroPowerStats.innerText =
    superHeroData.connections.groupAffiliation;
  superHeroJob.innerText = superHeroData.work.occupation;
  

  
  document.querySelector(".superhero-name").append(superHeroName);
  document.querySelector(".superhero-p").append(superHeroBio);
  document.querySelector(".superhero-img").append(superHeroImg);
  document.querySelector(".superhero-stats").append(superHeroPowerStats);
  document.querySelector(".superhero-job").append(superHeroJob);


};
