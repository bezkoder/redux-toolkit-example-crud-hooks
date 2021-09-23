import { configureStore } from '@reduxjs/toolkit'
import tutorialReducer from './slices/tutorials';

const reducer = {
  tutorials: tutorialReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;