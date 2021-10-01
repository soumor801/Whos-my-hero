//============================ Superhero API call =========================



  let submitButton = document.querySelector('.search-submit');
  submitButton.addEventListener('click', () => {
    console.log('clicked'); 
    
    const inputData = document.querySelector('.search-input').value;

    document.querySelector('.search-input').value = ''


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
  return superHero.json()
})
  .then((superHeroJSON) => {
    console.log(superHeroJSON)
    showSuperHero(superHeroJSON);
  })
  .catch((err) => {
	console.error(err);
});

}
)
const showSuperHero = () => {
  
}
  
  