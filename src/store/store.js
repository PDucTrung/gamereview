import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/auth.slice";
import { favoriteReducer } from "./features/favorite/favorite.slice";
import { gameReducer } from "./features/product/product.slice";

const store = configureStore({
  reducer: {
    games: gameReducer,
    favorite: favoriteReducer,
    auth: authReducer,
  },
});

export default store;
