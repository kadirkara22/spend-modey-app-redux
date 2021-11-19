import { createSlice } from "@reduxjs/toolkit";
import MockProductList from "../mock-product.json"


const dataProducts = MockProductList.products;

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: dataProducts,
        buyList: []
    },
    reducers: {
        buyProduct: (state, action) => {
            const product = action.payload
            state.buyList = [...state.buyList, { ...product }]
            /* state.buyList = state.buyList.find(item => item.id === product.id)
                ? state.buyList.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item)
                : [...state.buyList, { ...product, count: 1 }] */

        }
    },
    extraReducers: {}
});

export const { buyProduct } = productsSlice.actions;
export default productsSlice.reducer;

