import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./features/favorite/favorite.slice";
import { gameReducer } from "./features/product/product.slice";

const store = configureStore({
  reducer: {
    games: gameReducer,
    favorite: favoriteReducer,
  },
});

export default store;
