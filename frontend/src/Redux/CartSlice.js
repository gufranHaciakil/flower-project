import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: [
    {
      "id": 3,
      "productName": "Yellow flowers",
      "price": 300,
      "imageLink": "https://res.cloudinary.com/ddgwtjty8/image/upload/v1690552957/samples/My%20Flower%20online%20Store/4_jywwrc.jpg",
      "quanyity": 1,
    },

    {
      "id": 4,
      "productName": "violet flowers",
      "price": 400,
      "imageLink": "https://res.cloudinary.com/ddgwtjty8/image/upload/v1690552955/samples/My%20Flower%20online%20Store/1_zo8lj2.jpg",
      "quantity": 1,
    }


  ],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard: (state, action) => {
      console.log("doneeeeee")
    },
    increaseQuantity: (state, action) => {
      console.log("doneeeeee1")
    },
    decreaseQuantity: (state, action) => {
      console.log("doneeeeee2")
    },
    deleteProduct: (state, action) => {
      console.log("doneeeeee3")
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCard, increaseQuantity, decreaseQuantity, deleteProduct } = counterSlice.actions

export default counterSlice.reducer