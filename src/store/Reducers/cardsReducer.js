import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const cardsReducer = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    removeCards: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCards, removeCards } = cardsReducer.actions;

export default cardsReducer.reducer;
