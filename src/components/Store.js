import React from "react"
import Product from "./Product"

class Store extends React.Component {

    render() {

        const { productsLoading, productData } = this.props

        const productsComponent = productData.map((product) => {
            return <Product key={product.id} {...product} />
        })

        const loading =
            <div className="store-loading-wrapper">
                <div className="store-loading-gif">
                    <img width="32" src="images/loader.svg" /></div>
                <div className="store-loading-copy"> Loading products</div>
            </div>

        return (
            <div className="store-wrapper" >
                {productsLoading ? loading : productsComponent}
            </div>
        )
    }

}

export default Store