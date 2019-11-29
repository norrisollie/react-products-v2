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
                data-colourid={colour.colour_id}
                data-productid={colour.colour_id}
                onClick={(e) => this.handleColourClick(e)}
            ></div >
        })

        this.handleColourClick = (e) => {

            const colour_id = parseInt(e.target.dataset.colourid)
            const product_id = parseInt(e.target.dataset.productid)

            console.log("colour:", colour_id)
            console.log("product:", product_id)


            this.state.setState((prevState) => {

                console.log(prevState)

                // return prevState
            })

        }

        return (
            <div className={
                this.props.productsVisible
                    ? "product-wrapper fade-out"
                    : "product-wrapper fade-in"
            }
                key={id}>
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