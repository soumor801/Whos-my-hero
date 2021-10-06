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
// ===========================================================



// setTimeout(() => {
//   document.querySelector('.blip').style.display = 'none'
//   $(window).load(function () {
//     $(".blip").fadeOut("slow");  
//   });
  // document.querySelector('.sphere').style.display = 'hidden'
  // document.querySelector('.blip:after').style.display = 'hidden'
// }, 1000)






