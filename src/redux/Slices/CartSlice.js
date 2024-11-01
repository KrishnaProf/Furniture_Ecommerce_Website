import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
        totalQuantity:0,
        totalAmount:0
    },
    
    reducers: {
        addtoCart(state, action){
            console.log(action.payload)
            const newItem = action.payload;
            console.log(newItem)
            console.log(newItem.images)
            console.log(state.items)
            const existingItem = state.items.find(item => item.id === newItem.id);
            console.log(existingItem)
            if(existingItem){
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;

            }
            else{
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.images[0],
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }
            state.totalQuantity += 1;
            state.totalAmount += newItem.price;

        },

        removefromCart(state, action) {
            const id = action.payload;
            console.log(state)
            console.log(id)
            const existingItem = state.items.find(item => item.id === id);
            console.log(existingItem)
            if(existingItem){
                console.log('State' + state.totalAmount)
                console.log('existingItem' + existingItem.totalAmount)
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalAmount;
                state.items = state.items.filter(item => item.id != id);
            }

        }
    }

})

export const {addtoCart, removefromCart} = cartSlice.actions;

export default cartSlice.reducer;