//============================ Superhero API call =========================



  let submitButton = document.querySelector('.search-submit');
  submitButton.addEventListener('click', () => {
    console.log('clicked'); 
    let imgSuper = document.querySelector('.super');
   
    let superheroName = document.querySelector('.search-input').value;
  console.log(superheroName);

  document.querySelector('.search-input').value = ''


fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${superheroName}`, {
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
    console.log(superHeroJSON);
    let randomUser = superHeroJSON.name;
    console.log(superHeroJSON.results[0].name);
    
    
  })
  .catch((err) => {
	console.error(err);
});

}
)
const showSuperHero = () => {
  
  randomUser = document.createElement('div');
    randomUser.
    document.appendChild(randomUser);
}
  
  