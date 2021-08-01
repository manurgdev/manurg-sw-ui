export interface ICharacterVM {
    name: string;
    height: string;
    gender: string;
    mass: string;
    hairColor: string;
    eyeColor: string;
    skinColor: string;
    birthYear: string;
    films: string[];
    url: string;
    id: number | null;
}

export const createEmptyCharacter = (): ICharacterVM => ({
    id: null,
    name: '',
    height: '',
    gender: '',
    mass: '',
    hairColor: '',
    eyeColor: '',
    skinColor: '',
    birthYear: '',
    films: [],
    url: ''
});