import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/PokemonCard.scss"

// utils
import {capitalize} from "../utils/utils"

const PokemonCard = ({pokemon}) => {
    return (
        <a
            href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}
            className="pokemon-card"
        >
            <p className="pokemon-card-number">#{pokemon.id}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{capitalize(pokemon.name)}</p>
        </a>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

PokemonCard.defaultProps = {}

// export
export default PokemonCard
