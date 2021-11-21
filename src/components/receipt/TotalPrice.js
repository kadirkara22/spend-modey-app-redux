import React from 'react'
import { useSelector } from 'react-redux';

const TotalPrice = () => {
    const spendMoney = useSelector((state) => state.products.spendMoney);

    return (

        <div className="priceTotalDetail">
            <span className="total">Total</span>
            <div className="totalPrice">${spendMoney}</div>
        </div>
    )
}

export default TotalPrice
