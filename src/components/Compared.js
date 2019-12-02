import React, { Component } from 'react'
import ComparedProduct from "./ComparedProduct"

export default class Compared extends Component {
    render() {

    
        const {productsCompared} = this.props

        const productsComponent = productsCompared.map((product) => {
            return <ComparedProduct {...product}
            key={product.id}
            />
        })

        return (
            <div className={productsCompared.length < 1 ? "compared-wrapper" : "compared-wrapper active"}>
                <div className="compared-container">
                    <div className="compared-title">{productsCompared.length === 1 ? "Select another product to compare products" : "You've compared " + productsCompared.length + " products"}</div>
                    <div className="compared-products">
                        {productsCompared.length === 1 ? "" : productsComponent}
                    </div>
                </div>
            </div>
        )
    }
}
