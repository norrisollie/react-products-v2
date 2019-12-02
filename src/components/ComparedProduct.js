import React from "react"

class ComparedProduct extends React.Component {

    render() {

        const { id, isNewProduct, productColours, productDescription, productName, productPrice, handleColourClick, handleCheckboxChange } = this.props

        const productImages = productColours.map((colour) => {
            return <img
                className={
                    colour.isProductDefault
                        ? "product-image active"
                        : "product-image"
                }
                key={colour.colour_id}
                src={colour.colourImagePath}
                alt={productName}
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
                data-colourid={colour.colour_id}
                data-productid={id}
                onClick={(e) => handleColourClick(e)}
            ></div >
        })

        return (
            <div className={
                this.props.productsVisible
                    ? "product-wrapper fade-out"
                    : "product-wrapper fade-in"
            }
                key={id}>
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

export default ComparedProduct