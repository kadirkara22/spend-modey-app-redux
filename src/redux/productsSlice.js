import { createSlice } from "@reduxjs/toolkit";
import MockProductList from "../mock-product.json"


const dataProducts = MockProductList.products;

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: dataProducts,
        buyList: [],
        totalMoney: 100000000000

    },
    reducers: {
        buyProduct: (state, action) => {
            const product = action.payload
            state.buyList = state.buyList.find(item => item.id === product.id)
                ? state.buyList.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item)
                : [...state.buyList, { ...product, count: 1 }]
            state.items = state.items.find(item => item.id === product.id)
                ? state.items.map(item => item.id === product.id ? { ...item, count: Number(item.count) + 1 } : item)
                : [...state.items]


        },
        sellProduct: (state, action) => {
            const product = action.payload
            state.buyList = state.buyList.map(item => item.id === product.id
                ? { ...item, count: item.count - 1 } : item)
            state.buyList = state.buyList.filter(item => item.count !== 0)
            state.items = state.items.find(item => item.id === product.id)
                ? state.items.map(item => item.id === product.id ? { ...item, count: Number(item.count) > 0 ? Number(item.count) - 1 : 0 } : item)
                : [...state.items]

        },


    },
    extraReducers: {}
});

export const { buyProduct, sellProduct } = productsSlice.actions;
export default productsSlice.reducer;

