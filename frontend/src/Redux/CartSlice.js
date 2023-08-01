import { createSlice } from '@reduxjs/toolkit'
//import { json } from 'express'

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts") ? JSON.parse(localStorage.getItem("selectedProducts")) : [],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard: (state, action) => {

      const productsWithQuantity = { ...action.payload, "quantity": 1 }
      state.selectedProducts.push(productsWithQuantity)
      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts))

    },
    increaseQuantity: (state, action) => {
      const increasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id
      })
      increasedProduct.quantity += 1
      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts))



    },
    decreaseQuantity: (state, action) => {

      const decreaseedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id
      })

      if (decreaseedProduct.quantity > 1) {
        decreaseedProduct.quantity -= 1
      } else {
      }

      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts))


    },
    deleteProduct: (state, action) => {
      const newArry = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id
      })
      state.selectedProducts = newArry
      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts))

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCard, increaseQuantity, decreaseQuantity, deleteProduct } = counterSlice.actions

export default counterSlice.reducer