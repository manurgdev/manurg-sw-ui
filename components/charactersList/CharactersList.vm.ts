import { ICharacterVM } from "../character/Characters.vm";

export interface ICharactersListVM {
    page: number;
    total: number;
    next: string;
    previous: string;
    characters: ICharacterVM[];
}

export const createEmptyCharactersList = (): ICharactersListVM => ({
    page: 0,
    total: 0,
    next: '',
    previous: '',
    characters: []
});