import { configureStore } from "@reduxjs/toolkit";
import charactersListReducer from '../components/charactersList/charactersListSlice';
import charactersReducer from '../components/character/charactersSlice';
import filmsReducer from '../components/films/filmsSlice';

const store = configureStore({
    reducer: {
        charactersList: charactersListReducer,
        characters: charactersReducer,
        films: filmsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;