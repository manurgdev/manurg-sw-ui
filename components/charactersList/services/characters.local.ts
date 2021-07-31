// TODO: Remove if unused
import { CHARACTERS_LIST_KEY } from "../../../core/constants";
import { SMCharactersList, createEmptyCharactersList } from "./characters-service-model";

export function getCharactersFromLocalStorage(page: number): SMCharactersList {
    const characters: SMCharactersList = JSON.parse(
        localStorage.getItem(getCharacterLocalKey(page)) || '{}'
    );

    return Object.keys(characters).length
        ? characters
        : createEmptyCharactersList();
}

export function saveCharactersToLocalStorage(characters: SMCharactersList, page: number): void {
    localStorage.setItem(getCharacterLocalKey(page), JSON.stringify(characters));
}

function getCharacterLocalKey(page: number): string {
    return `${CHARACTERS_LIST_KEY}${page}`;
}