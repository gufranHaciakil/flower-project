/* eslint-disable eqeqeq */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts")
    ? JSON.parse(localStorage.getItem("selectedProducts"))
    : [],
  selectedProductsID:
    localStorage.getItem("selectedProductsID")
      ? JSON.parse(localStorage.getItem("selectedProductsID"))
      : []
  ,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const productsWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productsWithQuantity);
      state.selectedProductsID.push(action.payload.id);
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
    increaseQuantity: (state, action) => {
      const increasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increasedProduct.quantity += 1;
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },
    decreaseQuantity: (state, action) => {
      const decreaseedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      if (decreaseedProduct.quantity > 1) {
        decreaseedProduct.quantity -= 1;
      } else {
      }
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },
    deleteProduct: (state, action) => {
      const newArry = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.selectedProducts = newArry;
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      const newArry2 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectedProductsID = newArry2;
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCard, increaseQuantity, decreaseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
