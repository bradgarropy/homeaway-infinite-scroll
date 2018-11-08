import React from "react"
import {Component} from "react"
import {BrowserRouter as Router} from "react-router-dom"

// components
import Header from "./components/Header"
import PokemonList from "./components/PokemonList"
import Footer from "./components/Footer"

// styles
import "./scss/App.scss"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />
                    <PokemonList />
                    <Footer />
                </div>
            </Router>
        )
    }
}

// export
export default App
