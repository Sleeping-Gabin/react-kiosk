import { configureStore, createSlice, current } from "@reduxjs/toolkit";

//order slice
const orderSlice = createSlice({
  name: "order",
  initialState: {
    id: Math.floor(Math.random() * 200) + 101,
    method: null,
    cart: [],
    cartId: 0,
    payment: null,
  },
  reducers: {
    changeMethod: (state, action) => {
      state.method = action.payload;
    },
    increaseCartCount: (state, action) => {
      let cartItem = state.cart.find(item => item.id === action.payload);
      cartItem.count++;
    },
    decreaseCartCount: (state, action) => {
      let idx = state.cart.findIndex(item => item.id === action.payload);
      state.cart[idx].count--;

      if (state.cart[idx].count <= 0) {
        state.cart.splice(idx, 1);
      }
    },
    addCartItem: (state, action) => {
      const {food, options, count} = action.payload;

      let idx = current(state).cart.findIndex((item) => 
        item.food.id === food.id && 
        item.options.length === options.length &&
        item.options.every((opt, idx) => 
          options[idx].title===opt.title && options[idx].name===opt.name
        )
      );

      if (idx >= 0) {
        state.cart[idx].count += count;
      }
      else {
        state.cart.push({
          id: ++state.cartId,
          food: food,
          options: options,
          count: count
        });
      }
    },
    deleteCartItem: (state, action) => {
      let idx = state.cart.findIndex(item => item.id === action.payload);
      state.cart.splice(idx, 1);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    clearOrder: (state) => {
      state.id++;
      state.method = null;
      state.cart = [];
      state.cartId = 0;
    }
  }
});
export const { changeMethod, increaseCartCount, decreaseCartCount, addCartItem, deleteCartItem, clearCart, clearOrder } = orderSlice.actions;

//modal slice
const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false
  },
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    }
  }
});
export const { showModal, hideModal } = modalSlice.actions;

//store
export const store = configureStore({
  reducer: {
    order: orderSlice.reducer,
    modal: modalSlice.reducer
  }
});