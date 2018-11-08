import React from "react"

// components
import BuiltBy from "./BuiltBy"

// styles
import "../scss/Header.scss"

const Header = () => {
    return (
        <header className="header">
            <p>Infinite Scroll</p>
            <BuiltBy />
        </header>
    )
}

Header.propTypes = {}
Header.defaultProps = {}

// export
export default Header
