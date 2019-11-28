import React from "react"
import Header from "./components/Header"
import Store from "./components/Store"
import Footer from "./components/Footer"
import ProductsData from "./ProductsData"

class App extends React.Component {
    constructor() {
        super()

        this.state = {}

    }

    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <Store />
                <Footer />
            </div>
        )
    }
}


export default App