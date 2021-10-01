//============================ Superhero API call =========================




const fetchData = (superHero) => {
fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "a6f21e6ebfmsh0e902e8339d9828p151c6djsnc6fae22bf890"
  }
})
.then((superHero) => {
  console.log(response.json);
  return superHero.json();
}).then((superHero.json) => {
  showSuperHero(superHero.json);})

//   => {
  //   
  //    
  .catch((err) => {
	console.error(err);
});

}
const submitButton = document.querySelector('.search-submit');
submitButton.addEventListener('click', (ev) => {
  console.log('clicked');
  const inputData = document.querySelector('.search-input').value;

  fetchData(inputData);

  document.querySelector('.search-input').value = '';
})