import { getData } from "../../../core/xhr";
import { IFilmsSM } from "./films-service-model";

export function getFilmFromApi(url: string): Promise<IFilmsSM | null> {
    return getData(url)
        .then((film: IFilmsSM) => {
            return film.hasOwnProperty('title')
                ? film
                : null
        })
        .catch(() => {
            return null;
        });
}