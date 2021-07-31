import {
    SMCharactersList,
    SMCharacter
} from "./services/characters-service-model";
import {
    VMCharactersList,
    VMCharacter
} from "./CharactersList.vm";

export const mapCharactersListFromServiceToVM = ({ count, next, previous, results }: SMCharactersList): VMCharactersList => {
    return {
        total: count,
        next,
        previous,
        characters: mapCharactersFromServiceToVM(results)
    }
}

export const mapCharactersFromServiceToVM = (characters: SMCharacter[]): VMCharacter[] => {
    return characters.map((
        { name, birth_year, eye_color, films, gender, hair_color, height, mass, skin_color, url }: SMCharacter
    ) => {

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
        }
    })
}

const getCharacterIdFromUrl = (url: string): number | null => {
    const urlSplitted: string[] = url
        ? url.endsWith('/')
            ? url.slice(0, url.length - 1).split('/')
            : url.split('/')
        : [];

    return parseInt(urlSplitted[urlSplitted.length - 1]) || null;
}