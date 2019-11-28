import React from "react"
import HeaderLoginContainer from "./HeaderLoginContainer"

class Header extends React.Component {

    render() {
        return (
            <div className="header-wrapper">
                <HeaderLoginContainer />
                <div className="header-store-name"> Store</div>
            </div>
        )
    }

}

export default Header