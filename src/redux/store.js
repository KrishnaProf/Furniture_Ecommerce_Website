import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/CartSlice'
import WishlistSlice from './Slices/WishlistSlice'


const store = configureStore({
           
    reducer: {
         
        cart: cartReducer,
        wishlist: WishlistSlice
    }
})


export default store
