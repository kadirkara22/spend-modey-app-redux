import React from 'react'
import { useSelector } from 'react-redux'
import "./receipt.css"
import TotalPrice from './TotalPrice';
const Receipt = () => {
    const buyList = useSelector((state) => state.products.buyList);
    const spendMoney = useSelector((state) => state.products.spendMoney);



    return (
        <>
            {
                spendMoney &&

                <div className="receipt">
                    <div className="header">Your Receipt</div>
                    {buyList.map((item) => (
                        <div className="priceDetail">
                            <div className="productName">{item.productName}</div>
                            <div className="productCount">x{item.count}</div>
                            <div className="productTotalPrice">
                                ${(Number(item.productPrice) * Number(item.count)) >= 1000 && (Number(item.productPrice) * Number(item.count)) < 1000000
                                    ? (Number(item.productPrice) * Number(item.count)) + "k"
                                    : (Number(item.productPrice) * Number(item.count)) >= 1000000 && (Number(item.productPrice) * Number(item.count)) < 1000000000
                                        ? (Number(item.productPrice) * Number(item.count)) + "m"
                                        : (Number(item.productPrice) * Number(item.count)) >= 1000000000 && (Number(item.productPrice) * Number(item.count)) < 1000000000000
                                            ? (Number(item.productPrice) * Number(item.count)) + "b"
                                            : (Number(item.productPrice) * Number(item.count))
                                }</div>
                        </div>
                    ))}
                    <TotalPrice />
                </div>

            }

        </>
    )
}

export default Receipt
