import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/SearchBarMatches.scss"

const SearchBarMatches = ({matches}) => {
    return (
        <ul className="search-bar-matches">
            {matches.map((match, index) => (
                <li key={index}>{match}</li>
            ))}
        </ul>
    )
}

SearchBarMatches.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.string).isRequired,
}

SearchBarMatches.defaultProps = {}

// export
export default SearchBarMatches
