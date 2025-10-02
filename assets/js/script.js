
import fetchData from "./moduels/api.js";
import pokebuttons from "./moduels/pokebuttons.js";
fetchData()
.then (data => {
    pokebuttons(data);
})

