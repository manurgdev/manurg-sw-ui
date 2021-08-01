import { CHARACTERS_API_PATH } from "../../../core/constants";
import { getData } from "../../../core/xhr";
import { ICharactersListSM, createEmptyCharactersList } from "./charactersList-service-model";

export function getCharactersFromApi(page: number): Promise<ICharactersListSM> {

    const charactersApiPath: string = `${CHARACTERS_API_PATH}?page=${page}`

    return getData(charactersApiPath)
        .then((characters: ICharactersListSM) => {
            return characters.count
                ? characters
                : createEmptyCharactersList()
        });
}