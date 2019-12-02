import React from "react"
import Header from "./components/Header"
import Store from "./components/Store"
import Footer from "./components/Footer"
import ProductsData from "./ProductsData"
import Compared from "./components/Compared"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            productsVisible: false,
            productsLoading: true,
            productData: [],
            productsCompared: []
        }

        this.componentDidMount = () => {
            setTimeout(() => {
                this.setState((prevState) => {
                    prevState.productData = ProductsData
                    prevState.productsLoading = false
                    prevState.productsVisible = true
                    return prevState
                })
            }, 1000)
        }
    }

    handleColourClick = (e) => {

        const target_colour_id = parseInt(e.target.dataset.colourid)
        const target_product_id = parseInt(e.target.dataset.productid)

        this.setState((prevState) => {
            prevState.productData.map(product => {
                if(product.id === target_product_id) {
                    product.productColours.map(productColour => {
                        productColour.isProductDefault = false
                        if(productColour.colour_id === target_colour_id) {
                            productColour.isProductDefault = true
                        }
                    })
                }
            })
            return prevState
        })

    }

    handleCheckboxChange = (e) => {

        const target = e.target
        const targetType = e.target.type
        const targetProduct_id = parseInt(e.target.dataset.productid)

        if(targetType === "checkbox" && target.checked ) {
            this.setState((prevState) => {
                prevState.productData.map((product) => {
                    if(targetProduct_id === product.id) {
                        prevState.productsCompared.push(product)
                    }
                })
                return prevState
            })

        } else if(targetType === "checkbox" && !target.checked) {
            this.setState((prevState) => {
                prevState.productsCompared.map((product, index) => {
                    if(product.id === targetProduct_id)
                    prevState.productsCompared.splice(index, 1)
                })
                return prevState
            })
        }
    }

    render() {
        console.dir(this.state.productsCompared)
        return (
            <div className="app-wrapper">
                <Header />
                <Store {...this.state}
                handleColourClick={this.handleColourClick}
                handleCheckboxChange={this.handleCheckboxChange}/>
                <Compared productsCompared={this.state.productsCompared}/>
                <Footer />
            </div>
        )
    }
}


export default App