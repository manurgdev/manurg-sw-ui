import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilmsVM } from "./Films.vm";

interface FilmsState {
    value: IFilmsVM[];
}

const initialState: FilmsState = {
    value: []
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addFilm: (state, action: PayloadAction<IFilmsVM>) => {
            state.value = [...state.value, action.payload];
        }
    }
})

export const { addFilm } = filmsSlice.actions;

export default filmsSlice.reducer;