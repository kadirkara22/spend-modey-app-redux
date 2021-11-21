import { createSlice } from "@reduxjs/toolkit";
import MockProductList from "../mock-product.json"


const dataProducts = MockProductList.products;

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: dataProducts,
        buyList: [],
        totalMoney: 100000000000,
        spendMoney: 0

    },
    reducers: {
        buyProduct: (state, action) => {
            const product = action.payload
            //satın alınan ürünler
            state.buyList = state.buyList.find(item => item.id === product.id)
                ? state.buyList.map(item => item.id === product.id ? {
                    ...item, count: state.totalMoney >= Number(product.productPrice) ? Number(item.count) + 1
                        : Number(item.count)
                } : item)
                : [...state.buyList, { ...product, count: 1 }]

            //satın alınan ürün adedi
            state.items = state.items.find(item => item.id === product.id)
                ? state.items.map(item => item.id === product.id ? {
                    ...item,
                    count: state.totalMoney >= Number(product.productPrice) ? Number(item.count) + 1
                        : Number(item.count)
                } : item)
                : [...state.items]

            //toplam para hesabı
            state.totalMoney = state.totalMoney >= Number(product.productPrice) ?
                state.totalMoney - Number(product.productPrice) * 1 : state.totalMoney
            state.spendMoney = 100000000000 - state.totalMoney

        },
        sellProduct: (state, action) => {
            const product = action.payload
            //satılanlar listesi
            state.buyList = state.buyList.map(item => item.id === product.id
                ? { ...item, count: item.count - 1 } : item)
            state.buyList = state.buyList.filter(item => item.count !== 0)
            //satılan ürün adedi
            state.items = state.items.find(item => item.id === product.id)
                ? state.items.map(item => item.id === product.id ? { ...item, count: Number(item.count) > 0 ? Number(item.count) - 1 : 0 } : item)
                : [...state.items]

            //toplam para hesabı
            state.totalMoney = state.totalMoney < 99999999999 ?
                state.totalMoney + Number(product.productPrice) * (product.count > 0 ? 1 : 0) : state.totalMoney
            state.spendMoney = 100000000000 - state.totalMoney
        },


    },
    extraReducers: {}
});

export const { buyProduct, sellProduct } = productsSlice.actions;
export default productsSlice.reducer;

