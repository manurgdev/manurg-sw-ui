// TODO: Conver to store
import { store } from '../../../store';
import { createEmptyCharacter, ICharacterVM } from "../Characters.vm";
import { addCharacter } from "../charactersSlice";

export function getCharacterFromStore(id: number): ICharacterVM {
    const currentCharacter: ICharacterVM[] = store.getState().characters.value;
    const localCharacter: ICharacterVM | undefined = currentCharacter
        .find(character => character.id === id);

    return typeof localCharacter !== 'undefined'
        ? localCharacter
        : createEmptyCharacter();
}

export function saveCharacterToStore(character: ICharacterVM): void {
    store.dispatch(addCharacter(character));
}