import {
    ICharactersListSM,
} from "./services/charactersList-service-model";
import {
    ICharactersListVM,
} from "./CharactersList.vm";
import { mapCharactersFromServiceToVM } from "../character/Characters.mapper";

export const mapCharactersListFromServiceToVM = ({ count, next, previous, results }: ICharactersListSM): ICharactersListVM => {
    return {
        total: count,
        next,
        previous,
        characters: mapCharactersFromServiceToVM(results)
    }
}