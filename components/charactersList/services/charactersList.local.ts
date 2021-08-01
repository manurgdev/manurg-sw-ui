import { CHARACTERS_LIST_KEY } from "../../../core/constants";
import { store } from '../../../store';
import { createEmptyCharactersList, ICharactersListVM } from "../CharactersList.vm";
import { addCharactersList, CharactersListLocal } from "../charactersListSlice";

export function getCharactersFromStore(page: number): ICharactersListVM {
    const currentCharactersList: CharactersListLocal[] = store.getState().charactersList.value;
    const localCharactersList: CharactersListLocal | undefined = currentCharactersList
        .find(charactersList => charactersList.key === getCharacterLocalKey(page));

    return typeof localCharactersList !== 'undefined'
        ? localCharactersList.charactersList
        : createEmptyCharactersList();
}

export function saveCharactersToStore(charactersList: ICharactersListVM): void {
    store.dispatch(addCharactersList(
        {
            key: getCharacterLocalKey(charactersList.page),
            charactersList
        }
    ));
}

function getCharacterLocalKey(page: number): string {
    return `${CHARACTERS_LIST_KEY}${page}`;
}