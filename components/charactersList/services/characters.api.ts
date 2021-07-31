import { CHARACTERS_API_PATH } from "../../../core/constants";
import { getData } from "../../../core/xhr";
import { SMCharactersList, createEmptyCharactersList } from "./characters-service-model";

export function getCharactersFromApi(page: number): Promise<SMCharactersList> {

    const charactersApiPath: string = `${CHARACTERS_API_PATH}?page=${page}`

    return getData(charactersApiPath)
        .then((characters: SMCharactersList) => {
            return characters.count
                ? characters
                : createEmptyCharactersList()
        });
}