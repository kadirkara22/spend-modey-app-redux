import React, { useState } from 'react'
import "./content.css"
import { useDispatch, useSelector } from 'react-redux';
import TotalMoney from '../totalMoney';
import { buyProduct, sellProduct } from '../../redux/productsSlice';




const Content = () => {


    const items = useSelector(state => state.products.items)

    const buyList = useSelector(state => state.products.buyList)



    const dispatch = useDispatch();
    const handleClickBuy = (product) => {

        dispatch(buyProduct(product))

    }
    const handleClickSell = (product) => {

        dispatch(sellProduct(product))


    }

    console.log(buyList)
    console.log(items)



    return (
        <>
            <TotalMoney />
            <div className="contentBox">
                {
                    items.map((item) => (
                        <div key={item.id} className="content">
                            <div className="productInfo">
                                <img src={item.image} alt={item.productName} className="productImage"></img>
                                <div className="productName">{item.productName}</div>
                                <div className="prductPrice">${item.productPrice}</div>
                            </div>

                            <div className="sellorBuy">
                                <button className={item.count > 0 ? "sellRed" : "sellbutton"} onClick={() => handleClickSell(item)}>Sell</button>
                                <input type="number" className="inputNumber" value={item.count} onChange={() => { }}></input>
                                <button className="buyButton" onClick={() => handleClickBuy(item)}>Buy</button>
                            </div>

                        </div>


                    ))
                }

            </div>
        </>
    )
}

export default Content
