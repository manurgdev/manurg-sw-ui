import { store } from '../../../store';
import { createEmptyFilm, IFilmsVM } from "../Films.vm";
import { addFilm } from "../filmsSlice";

export function getFilmFromStore(url: string): IFilmsVM {
    const currentFilm: IFilmsVM[] = store.getState().films.value;
    const localFilm: IFilmsVM | undefined = currentFilm
        .find(film => film.url === url);

    return typeof localFilm !== 'undefined'
        ? localFilm
        : createEmptyFilm();
}

export function saveFilmToStore(film: IFilmsVM): void {
    store.dispatch(addFilm(film));
}