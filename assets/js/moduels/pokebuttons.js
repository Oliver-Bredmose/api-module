export default function pokebuttons(data) {
    const domElement = document.getElementById('exampleList');
    console.log(data.results);
    data.results.forEach(pokemon => {
        const listItem = document.createElement('li');
        listItem.textContent = pokemon.name;
        domElement.appendChild(listItem);
    addEventListener('click', () => {
        console.log(`You clicked on ${pokemon.listItem}`);
    });
});
}