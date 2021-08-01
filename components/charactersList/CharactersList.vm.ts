import { ICharacterVM } from "../character/Characters.vm";

export interface ICharactersListVM {
    total: number;
    next: string;
    previous: string;
    characters: ICharacterVM[];
}

export const createEmptyCharactersList = (): ICharactersListVM => ({
    total: 0,
    next: '',
    previous: '',
    characters: []
});