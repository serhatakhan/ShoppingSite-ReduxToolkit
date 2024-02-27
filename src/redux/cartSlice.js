import { createSlice } from "@reduxjs/toolkit";

// kartların içindeki verileri localStorage'den alacağız
// her click sonrası set edilen cartları local'den alıp JSON.parse ederek return et.
const fetchFromLocalStorage = () =>{
    let cart = localStorage.getItem("cart")
    if(cart){
        return JSON.parse(localStorage.getItem("cart"))
    }else {
        return []
    }
}
// locale kaydet
const storeInLocalStorage = (data)=>{
    localStorage.setItem("cart", JSON.stringify(data))
}


const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard: (state, action)=>{
            const isItemCart = state.carts.find((item)=> item.id === action.payload.id)

            if(isItemCart){
                const tempCart = state.carts.map((item)=> {
                    if(item.id === action.payload.id){
                        let tempQty = item.quantity + action.payload.quantity
                        let tempTotalPrice = tempQty + item.price
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }
                })
                state.carts = tempCart
                storeInLocalStorage(state.carts)
            }else {
                state.carts.push(action.payload)
                storeInLocalStorage(state.carts)
            }
        },
        removeFromCard: (state, action)=>{
            const tempCart = state.carts.filter((item)=> item.id !== action.payload)
            state.carts = tempCart
            storeInLocalStorage(state.carts)
        },
        clearCard: (state)=>{
            state.carts = []
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state)=>{
            state.totalAmount = state.carts.reduce((cartTotal, cartItem)=> {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0)
            state.itemCount = state.carts.length
        }
    }
})

export const {addToCard, removeFromCard, clearCard, getCartTotal} = cartSlice.actions

export default cartSlice.reducer