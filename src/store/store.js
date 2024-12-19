import { configureStore } from '@reduxjs/toolkit'
import { cardsReducer } from './Reducers/cardsReducer'

export const store = configureStore({
  reducer: {
   cardsReducer: cardsReducer.reducer,
  },
})