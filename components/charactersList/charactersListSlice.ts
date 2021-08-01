import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharactersListVM } from "./CharactersList.vm";

interface CharactersListState {
    value: CharactersListLocal[];
}

export interface CharactersListLocal {
    key: string;
    charactersList: ICharactersListVM
}

const initialState: CharactersListState = {
    value: []
}

export const charactersListSlice = createSlice({
    name: 'charactersList',
    initialState,
    reducers: {
        addCharactersList: (state, action: PayloadAction<CharactersListLocal>) => {
            state.value = [...state.value, action.payload];
        }
    }
})

export const { addCharactersList } = charactersListSlice.actions;

export default charactersListSlice.reducer;