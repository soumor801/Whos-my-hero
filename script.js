//============================ Superhero API call =========================

const inputData = () => {
  let superheroName = document.querySelector('.search-input').value;
  console.log(superheroName);
  document.querySelector('.search-input').value = ''
}

  let submitButton = document.querySelector('.search-submit');
  submitButton.addEventListener('click', (superheroName) => {
    console.log('clicked'); 
    
    


// const fetchData = (superHero) => {
fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "a6f21e6ebfmsh0e902e8339d9828p151c6djsnc6fae22bf890"
  }
})
.then((superHero) => {
  console.log(superHero.json);
  return superHero.json(inputData)
})
  // .then((superHeroJSON) => {
  //   console.log(superHeroJSON)
  //   showSuperHero(superHeroJSON);
  // })
  .then((superHeroJSON) => {
    console.log(superHeroJSON);
    let randomUser = superHeroJSON.name;
    console.log(superHeroJSON.results[0].name);
   
   
   
    // randomUser = document.createElement('div');
    
    // document.appendChild(randomUser);
  })
  .catch((err) => {
	console.error(err);
});

}
)
const showSuperHero = () => {
  
}
  
  