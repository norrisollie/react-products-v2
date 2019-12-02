import React from "react"

class Product extends React.Component {

    render() {

        const { id, isNewProduct, productColours, productInfo, productDescription, productName, productPrice, handleColourClick, handleCheckboxChange } = this.props

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
            >
                <div className="colour-name-hover">{colour.colourName}</div>
            </div >
        })

        const features = productInfo.map((feature) => {

            const processor = <li className="product-feature">{feature.processor}</li>
            const processor_turboboost = <li className="product-feature">{feature.processor_turboboost}</li>
            const graphics = <li className="product-feature">{feature.graphics}</li>
            const ram = <li className="product-feature">{feature.ram}</li>
            const storage = <li className="product-feature">{feature.storage}</li>
            const display = <li className="product-feature">{feature.display}</li>
            const thunderbolt = <li className="product-feature">{feature.thunderbolt}</li>
            
            const featureEl = <ul className="product-features">{processor} {processor_turboboost} {graphics} {ram} {storage} {display} {thunderbolt}</ul>
            
            return featureEl
        })

        return (
            <div className={
                this.props.productsVisible
                    ? "product-wrapper fade-out"
                    : "product-wrapper fade-in"
            }
                key={id}>
                <div className="product-image-wrapper">
                    {productImages}
                </div>
                <div className="product-colours-wrapper">
                    {colourButtons}
                </div>
                <div className="product-new">{isNewProduct ? "NEW" : ""}</div>
                <div className="product-desc">{productDescription}</div>
                    {features}
                <div className="product-price">{productPrice.toLocaleString("gb", { style: "currency", currency: "GBP" })}</div>
                <div className="product-compared">
                    <label className="compare-label">
                        <input
                        className="compare-checkbox"
                        type="checkbox"
                        onChange={(e)=> handleCheckboxChange(e) }
                        data-productid={id}
                        />
                        Compare Product
                    </label>
                </div>
            </div>
        )
    }
}

export default Product