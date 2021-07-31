export interface SMCharactersList {
    count: number;
    next: string;
    previous: string;
    results: SMCharacter[];
}

export interface SMCharacter {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export const createEmptyCharactersList = (): SMCharactersList => ({
    count: 0,
    next: '',
    previous: '',
    results: []
})