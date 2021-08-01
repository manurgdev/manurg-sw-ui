import { ICharacterSM } from "../../character/services/characters-service-model";

export interface ICharactersListSM {
    count: number;
    next: string;
    previous: string;
    results: ICharacterSM[];
}

export const createEmptyCharactersList = (): ICharactersListSM => ({
    count: 0,
    next: '',
    previous: '',
    results: []
})