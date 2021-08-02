import { IFilmsVM } from "../components/films/Films.vm";

export const mockedFilms: IFilmsVM[] = [
    {
        title: "A New Hope",
        url: "https://swapi.dev/api/films/1/",
        episodeId: 4,
        releaseDate: '1977-05-25',
        yearsAgo: 44
    },
    {
        title: 'The Empire Strikes Back',
        url: 'https://swapi.dev/api/films/2/',
        episodeId: 5,
        releaseDate: '1980-05-17',
        yearsAgo: 41
    }
];

export const mockedFilmsUrl: string[] = [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/"
]