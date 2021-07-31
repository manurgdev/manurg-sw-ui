export interface VMCharactersList {
    total: number;
    next: string;
    previous: string;
    characters: VMCharacter[];
}

export interface VMCharacter {
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