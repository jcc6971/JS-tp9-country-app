// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
let country = [];
let recherche = [];
let search = [];
const cContainer = document.querySelector(".countries-container");

const importCountry = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((donnee) => (country = donnee));
};

// -------entrée nom--------
inputSearch.addEventListener("input", (e) => {
  e.preventDefault();
  recherche = e.target.value;
  diplayCountries();
  console.log(recherche);
});
// // -------curseur------
inputRange.addEventListener("input", (e) => {
  e.preventDefault();
  rangeValue.textContent = e.target.value;

  diplayCountries();
});

async function diplayCountries() {
  await importCountry();

  country.length = rangeValue.textContent;
  cContainer.innerHTML = country
    .filter((count) => count.name.common.includes(recherche))
    .map(
      (affiche) => `
    <div class="card">
    <img src=${affiche.flags.png}>
    <h2> ${affiche.name.common}</h2>
    <h3> ${affiche.capital}
    <p> Population: ${affiche.population} </p>
    </div>
    `
    )
    .join("");
}

// // // 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// // // 3 - Passer les données à une variable

// // // 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// // // 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// // // coutry.name.includes(inputSearch.value);

// // // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// // // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
