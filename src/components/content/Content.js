import React, { useState } from 'react'
import "./content.css"
import { useDispatch, useSelector } from 'react-redux';
import TotalMoney from '../totalMoney';
import { buyProduct } from '../../redux/productsSlice';


const Content = () => {
    const [count, setCount] = useState(0);

    const items = useSelector(state => state.products.items)
    const buyList = useSelector(state => state.products.buyList)

    const dispatch = useDispatch();

    console.log(buyList)

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
                                <button className="sellbutton">Sell</button>
                                <input type="text" className="inputNumber" value={count} onChange={(e) => setCount(e.target.value)}></input>
                                <button className="buyButton" onClick={() => dispatch(buyProduct({ item }))}>Buy</button>
                            </div>
                        </div>


                    ))
                }

            </div>
        </>
    )
}

export default Content
