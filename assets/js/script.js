fetchData();

async function fetchData(params) {
    
    try {

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
// Finder alle eksempelpokemon
document.querySelectorAll("#exampleList span").forEach(span => {
    span.addEventListener("click", () => {
      const input = document.getElementById("pokemonName");
      input.value = span.textContent; // sæt navnet i input feltet
      fetchData(); // kør søgningen automatisk
    });
  });