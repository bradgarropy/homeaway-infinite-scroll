import React from "react"
import PropTypes from "prop-types"

// components
import SearchBarMatches from "./SearchBarMatches"

// styles
import "../scss/SearchBar.scss"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
            matches: [],
            pokemon: {},
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        const {name, value} = event.target
        const {pokemonList} = this.props

        const matches = pokemonList
            .map(pokemon => pokemon.name)
            .filter(name => name.startsWith(value))
            .slice(0, 7)

        this.setState({
            [name]: value,
            matches,
        })
    }

    render() {
        const {search, matches} = this.state

        return (
            <div className="search-bar">
                <form>
                    <input
                        autoComplete="off"
                        name="search"
                        value={search}
                        onChange={this.onChange}
                    />
                    {search &&
                        matches.length > 0 && (
                        <SearchBarMatches matches={matches} />
                    )}
                </form>
            </div>
        )
    }
}

SearchBar.propTypes = {
    pokemonList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

SearchBar.defaultProps = {}

// export
export default SearchBar
