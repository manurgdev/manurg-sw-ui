import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacterVM } from "./Characters.vm";

interface CharactersState {
    value: ICharacterVM[];
}

const initialState: CharactersState = {
    value: []
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<ICharacterVM>) => {
            state.value = [...state.value, action.payload];
        }
    }
})

export const { addCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;