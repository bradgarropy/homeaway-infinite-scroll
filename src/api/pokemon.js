// packages
import axios from "axios"

async function getPokemonList() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    const pokemonList = response.data.results
    return pokemonList
}

async function getPokemons(pokemonList) {
    const promises = pokemonList.map(pokemon => {
        return getPokemon(pokemon.url)
    })

    const pokemons = await Promise.all(promises)
    return pokemons
}

async function getPokemon(url) {
    const response = await axios.get(url)
    const pokemon = response.data
    return pokemon
}

// exports
export {getPokemonList, getPokemons, getPokemon}
