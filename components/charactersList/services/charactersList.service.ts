import { mapCharactersListFromServiceToVM } from "../CharactersList.mapper";
import { ICharactersListVM } from "../CharactersList.vm";
import { getCharactersFromApi } from "./charactersList.api";
import { getCharactersFromStore, saveCharactersToStore } from "./charactersList.local";

export async function getCharacters(page: number = 1) {
    let charactersFromLocal: ICharactersListVM = getCharactersFromStore(page);

    if (charactersFromLocal.total) return charactersFromLocal;

    let charactersFromApi: ICharactersListVM = await getCharactersFromApi(page)
        .then(characters => mapCharactersListFromServiceToVM(characters, page));

    return charactersFromApi;
}