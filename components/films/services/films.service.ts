import { mapFilmFromServiceToVM } from "../Films.mapper";
import { createEmptyFilm, IFilmsVM } from "../Films.vm";
import { IFilmsSM } from "./films-service-model";
import { getFilmFromApi } from "./films.api";
import { getFilmFromStore } from "./films.local";

export async function getFilm(url: string) {
    let filmsFromLocal: IFilmsVM = getFilmFromStore(url);

    if (filmsFromLocal.episodeId) return filmsFromLocal;

    let filmFromApi: IFilmsVM = await getFilmFromApi(url)
        .then((character: IFilmsSM | null) => {
            return character !== null
                ? mapFilmFromServiceToVM(character)
                : createEmptyFilm()
        });

    return filmFromApi;
}