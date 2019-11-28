import React from "react"

class Product extends React.Component {

    render() {
        return (
            <div className="product-wrapper">
                <div className="product-title"></div>
                <div className="product-image">
                    <img src=""></img>
                    <img src=""></img>
                </div>
                <div className="product-colours"></div>
            </div>
        )

    }

}

export default Product