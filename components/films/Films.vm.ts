export interface IFilmsVM {
    title: string;
    episodeId: number;
    releaseDate: string;
    url: string;
    yearsAgo: number;
}

export const createEmptyFilm = (): IFilmsVM => ({
    title: '',
    episodeId: 0,
    releaseDate: '',
    url: '',
    yearsAgo: 0
});