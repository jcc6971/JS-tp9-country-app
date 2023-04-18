// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
let country = [];
let recherche = [];

let minto;
let maxto;
const cContainer = document.querySelector(".countries-container");

const importCountry = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((donnee) => (country = donnee));
};
function tri(a, b) {
  if (a.translations.fra.common < b.translations.fra.common) return -1;
  else if (a.translations.fra.common == b.translations.fra.common) return 0;
  else return 1;
}
diplayCountries();
// -------entrée nom--------
inputSearch.addEventListener("input", (e) => {
  e.preventDefault();
  recherche = e.target.value;
  diplayCountries();
});
// // -------curseur------
inputRange.addEventListener("input", (e) => {
  e.preventDefault();
  rangeValue.textContent = e.target.value;

  diplayCountries();
});
// -------tri croissant-------
minToMax.addEventListener("click", () => {
  minto = true;
  // country.sort((a, b) => a.population - b.population);
  diplayCountries();
});
// -----tri decroissant----
maxToMin.addEventListener("click", () => {
  maxto = true;
  diplayCountries();
});
// -----tri alpha-----
alpha.addEventListener("click", () => {
  minto = false;
  maxto = false;
  diplayCountries();
});
async function diplayCountries() {
  await importCountry();

  if (minto === true) country.sort((a, b) => a.population - b.population);
  else if (maxto === true) country.sort((a, b) => b.population - a.population);
  else {
    country.sort(tri);
  }

  // country.length = rangeValue.textContent;
  cContainer.innerHTML = country
    .filter((count) =>
      count.translations.fra.common.toLowerCase().includes(recherche)
    )
    .map((affiche) => {
      return `
        <div class="card">
        <img src=${affiche.flags.png}>
        <h2> ${affiche.translations.fra.common}</h2>
        <h3> ${affiche.capital}
        <p> Population: ${affiche.population} </p>
        </div>
        `;
    })
    .slice(0, rangeValue.textContent)
    .join("");
  minto = false;
  maxto = false;
}

// // // 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// // // 3 - Passer les données à une variable

// // // 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// // // 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// // // coutry.name.includes(inputSearch.value);

// // // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// // // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
