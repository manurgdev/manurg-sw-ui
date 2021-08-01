import {
    ICharacterSM
} from "./services/characters-service-model";
import {
    ICharacterVM
} from "./Characters.vm";

export const mapCharactersFromServiceToVM = (characters: ICharacterSM[]): ICharacterVM[] => {
    return characters.map((character: ICharacterSM) => mapCharacterFromServiceToVM(character));
}

export const mapCharacterFromServiceToVM = (
    { name, birth_year, eye_color, films, gender, hair_color, height, mass, skin_color, url }: ICharacterSM
): ICharacterVM => {
    return {
        id: getCharacterIdFromUrl(url),
        name,
        films,
        gender,
        height,
        mass,
        url,
        birthYear: birth_year,
        eyeColor: eye_color,
        hairColor: hair_color,
        skinColor: skin_color,
    };
}

const getCharacterIdFromUrl = (url: string): number | null => {
    const urlSplitted: string[] = url
        ? url.endsWith('/')
            ? url.slice(0, url.length - 1).split('/')
            : url.split('/')
        : [];

    return parseInt(urlSplitted[urlSplitted.length - 1]) || null;
}