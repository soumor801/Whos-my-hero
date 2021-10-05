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

function prop(min, max) {
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand = rand+"%";
}

function spawnSphere() {
  var top = prop(30, 70);
  var left = prop(30, 70);
  console.log(top, left);
  var $sphere = '<div class="sphere"></div>';
  $("body").append( $sphere ).find(".sphere:last").animate({
    top: top,
    left: left,
    opacity: 0
  }, 4000, function(){
    $("body").find(".sphere:first").remove();
  });
}

setInterval("spawnSphere()", 500);
// let stop = setInterval("spawnSphere()", 500);




// function stopLoad() {
//   clearInterval(stop)

// }
// setTimeout(() => {
//   stopLoad();
// },1000);



// setTimeout(() => {
//   document.querySelector('.sphere').style.display = 'none'
// }, 1000)
// $(window).load(function () {
//   $(".blip").fadeOut("slow");  
// });