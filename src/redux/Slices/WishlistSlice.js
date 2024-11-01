import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items:[]

    },
    reducers: {
        addtoWishList(state, action){
            console.log(action.payload)
            const newItem = action.payload;
            console.log(newItem)
            console.log(newItem.images)
            console.log(newItem.images[0])
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.images[0],
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });

            }

        },

        removefromWishList(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                state.totalQuantity = existingItem.quantity;
                state.totalAmount = existingItem.totalPrice;
                state.items = state.items.filter(item => item.id != id);
            }

        }
    }

})

export const {addtoWishList, removefromWishList} = wishlistSlice.actions;

export default wishlistSlice.reducer;