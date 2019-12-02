import React from "react"
import Product from "./Product"

class Store extends React.Component {

    render() {

        const { productsLoading, productData, handleColourClick, handleCheckboxChange} = this.props

        const productsComponent = productData.map((product) => {
            return <Product {...product}
            key={product.id}
            handleColourClick={handleColourClick}
            handleCheckboxChange={handleCheckboxChange} />
        })

        const storeContent =
            productsLoading ? <div className="store-loading-wrapper">
                <div className="store-loading-gif">
                    <img width="32" src="images/loader.svg" alt="loader"/></div>
                <div className="store-loading-copy"> Loading products</div>
            </div> : productsComponent

        return (
            <div className="store-wrapper" >
                <div className="store-title-wrapper">
                    <div className="store-title">Choose your Macbook Pro</div>
                </div>
                <div className="store-products-wrapper">
                {storeContent}
                </div>
            </div>
        )
    }

}

export default Store