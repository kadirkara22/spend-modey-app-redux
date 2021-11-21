import React from 'react'
import "./header.css"
const Header = () => {
    return (
        <div className="header" style={{ height: "330px" }}>
            <img src="https://neal.fun/spend/billgates.jpg" alt="bill" className="bilgates"></img>
            <span className="header_title"> Spend Bill Gates' Money</span>
        </div>
    )
}

export default Header
