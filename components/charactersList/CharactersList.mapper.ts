import {
    ICharactersListSM,
} from "./services/charactersList-service-model";
import {
    ICharactersListVM,
} from "./CharactersList.vm";
import { mapCharactersFromServiceToVM } from "../character/Characters.mapper";

export const mapCharactersListFromServiceToVM = ({ count, next, previous, results }: ICharactersListSM, page: number): ICharactersListVM => {
    return {
        page: page,
        total: count,
        next,
        previous,
        characters: mapCharactersFromServiceToVM(results)
    }
}