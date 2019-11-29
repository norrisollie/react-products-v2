import React from "react"
import Header from "./components/Header"
import Store from "./components/Store"
import Footer from "./components/Footer"
import ProductsData from "./ProductsData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            productsVisible: false,
            productsLoading: true,
            productData: []
        }

        this.componentDidMount = () => {
            setTimeout(() => {
                this.setState((prevState) => {
                    prevState.productData = ProductsData
                    prevState.productsLoading = false
                    prevState.productsVisible = true
                    return prevState
                })
            }, 3000)
        }
    }

    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <Store {...this.state} />
                <Footer />
            </div>
        )
    }
}


export default App