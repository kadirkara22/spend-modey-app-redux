import React from 'react'
import { useSelector } from 'react-redux'
import "./totalMoney.css"
const TotalMoney = () => {
    const totalMoney = useSelector((state) => state.products.totalMoney)

    return (
        <div className="totalMoney">
            {totalMoney}
        </div>
    )
}

export default TotalMoney
