import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quntity: 0,
        total: 0,
        products: []
    },
    reducers: {
        addProduct: (state, action) =>{
            state.quntity += action.payload.quntity;
            state.total += action.payload.price;
            state.products.push(action.payload.product)
        }
    }
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;