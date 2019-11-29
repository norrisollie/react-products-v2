import React from "react"

class Product extends React.Component {

    render() {

        const { id, isNewProduct, productColours, productDescription, productName, productPrice } = this.props

        console.log(this.props)

        const productImages = productColours.map((colour) => {
            return <img
                className={
                    colour.isProductDefault
                        ? "product-image active"
                        : "product-image"
                }
                key={colour.colour_id}
                src={colour.colourImagePath}
            />
        })

        const colourButtons = productColours.map((colour) => {
            return <div
                className={
                    colour.isProductDefault
                        ? "colour-button active"
                        : "colour-button"
                }
                style={{ "backgroundColor": colour.colourHex }}
                key={colour.colour_id}
                onClick={(e, id) => this.handleColourClick(e, id)}
            ></div >
        })

        this.handleColourClick = (e, id) => {


        }

        return (
            <div className={this.props.productsVisible ? "product-wrapper fade-out" : "product-wrapper fade-in"} key={id}
            >
                <div className="product-new">{isNewProduct ? "NEW" : ""}</div>
                <div className="product-title">{productName}</div>
                <div className="product-image-wrapper">
                    {productImages}
                </div>
                <div className="product-colours-wrapper">
                    {colourButtons}
                </div>
                <div className="product-desc">{productDescription}</div>
                <div className="product-price">{productPrice.toLocaleString("gb", { style: "currency", currency: "GBP" })}</div>
            </div>
        )

    }

}

export default Product