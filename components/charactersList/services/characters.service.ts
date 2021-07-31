import { SMCharactersList } from "./characters-service-model";
import { getCharactersFromApi } from "./characters.api";
import { getCharactersFromLocalStorage, saveCharactersToLocalStorage } from "./characters.local";

export async function getCharacters(page: number = 1) {
    if (typeof window !== 'undefined') {
        let charactersFromLocal: SMCharactersList = getCharactersFromLocalStorage(page);

        if (charactersFromLocal.count) return charactersFromLocal;
    }

    let charactersFromApi: SMCharactersList = await getCharactersFromApi(page);

    if (typeof window !== 'undefined') saveCharactersToLocalStorage(charactersFromApi, page);

    return charactersFromApi;
}