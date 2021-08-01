import { CHARACTERS_API_PATH } from "../../../core/constants";
import { getData } from "../../../core/xhr";
import { createEmptyCharacter } from "../Characters.vm";
import { ICharacterSM } from "./characters-service-model";

export function getCharacterFromApi(id: number): Promise<ICharacterSM | null> {

    const characterApiPath: string = `${CHARACTERS_API_PATH}${id}`

    return getData(characterApiPath)
        .then((character: ICharacterSM) => {
            return character.hasOwnProperty('name')
                ? character
                : null
        });
}