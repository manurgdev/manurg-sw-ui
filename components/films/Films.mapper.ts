import {
    IFilmsSM
} from "./services/films-service-model";
import {
    IFilmsVM
} from "./Films.vm";

export const mapFilmFromServiceToVM = (
    { title, episode_id, release_date, url }: IFilmsSM
): IFilmsVM => {
    return {
        title,
        url,
        episodeId: episode_id,
        releaseDate: release_date,
        yearsAgo: getYearsAgo(release_date)
    };
}

const getYearsAgo = (date: string): number => {
    let dateObj = new Date(date);
    return parseInt(new Number((new Date().getTime() - dateObj.getTime()) / 31536000000).toFixed(0));
}