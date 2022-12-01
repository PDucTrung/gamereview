import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItem: (state, { payload: { gameId, quantity } }) => {
      const itemIndex = state.findIndex((item) => item.gameId == gameId);

      if (itemIndex !== -1) {
        toast.info("Đã có trong favorite", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("Add game to favorite successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return [...state, { gameId, quantity }];
      }
    },
    removeItem: (state, action) => {
      const newState = state.filter((item) => item.gameId !== action.payload);
      return newState;
    },
    clearItem: (state, action) => {
      return initialState;
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addItem, removeItem, clearItem } = favoriteSlice.actions;

export const selectTotalfavoriteItem = (state) => state.favorite.length;

export const selectfavorite = (state) => {
  const games = state.games.data;
  const favorite = state.favorite;

  const items = favorite.map((item) => ({
    game: games.find((game) => game.id == item.gameId),
    quantity: item.quantity,
  }));

  return {
    items,
    removeItem,
    clearItem,
  };
};
