import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  currentPage: 0,
  loading: true,
  error: null,
};

const PAGE_SIZE = 24;

export const loadgames = createAsyncThunk("game/load", async () => {
  const res = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    {
      headers: {
        "X-RapidAPI-Key": "92b455eb12msh8147b411dccf41cp1b1fb1jsn36b6460ae678",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  return data;
});

export const loadgameById = createAsyncThunk("games/byId", async (id) => {
  const res = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id,
    {
      headers: {
        "X-RapidAPI-Key": "92b455eb12msh8147b411dccf41cp1b1fb1jsn36b6460ae678",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  return data;
});

const gameSlide = createSlice({
  name: "games",
  initialState,
  reducers: {
    pageChanged: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadgames.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    });
  },
});

export const gameReducer = gameSlide.reducer;
export const { pageChanged } = gameSlide.actions;
export const selectGames = (state) => state.games;
export const selectGameById = (gameId) => (state) =>
  state.games.data.find((game) => game.id == gameId);
export const selectGamesStatus = (state) => state.games.loading;
export const selectGameList = (state) => {
  const total = state.games.data.length;
  const totalPage = Math.ceil(total / PAGE_SIZE);

  const gamesByPage = state.games.data.slice(
    state.games.currentPage * PAGE_SIZE,
    (state.games.currentPage + 1) * PAGE_SIZE
  );

  return {
    games: gamesByPage,
    currentPage: state.games.currentPage,
    totalPage,
    pageChanged,
    loading: state.loading,
  };
};
