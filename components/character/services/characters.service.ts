import { mapCharacterFromServiceToVM } from "../Characters.mapper";
import { createEmptyCharacter, ICharacterVM } from "../Characters.vm";
import { ICharacterSM } from "./characters-service-model";
import { getCharacterFromApi } from "./characters.api";
import { getCharacterFromStore } from "./characters.local";

export async function getCharacter(id: number) {
    let charactersFromLocal: ICharacterVM = getCharacterFromStore(id);

    if (charactersFromLocal.id !== null) return charactersFromLocal;

    let characterFromApi: ICharacterVM = await getCharacterFromApi(id)
        .then((character: ICharacterSM | null) => {
            return character !== null
                ? mapCharacterFromServiceToVM(character)
                : createEmptyCharacter()
        });

    return characterFromApi;
}