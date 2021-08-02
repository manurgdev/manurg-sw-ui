import { IFilmsVM } from './Films.vm';
import { Film, FilmsCount, FilmsWrapper } from './Films.styles';
import { useEffect, useState } from 'react';
import { getFilm } from './services/films.service';
import { store } from '../../store';
import { saveFilmToStore } from './services/films.local';

export function Films({ filmsUrl }: { filmsUrl: string[] }) {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([] as IFilmsVM[]);

  useEffect(() => {
    filmsUrl.forEach(async (filmUrl) => {
      const film: IFilmsVM = await getFilm(filmUrl);

      setFilms((prevFilms: IFilmsVM[]) => {
        return !prevFilms.some((prevFilm: IFilmsVM) => prevFilm.episodeId === film.episodeId)
          ? [...prevFilms, film]
          : prevFilms;
      });

      if (!store.getState().films.value.some((storedFilm: IFilmsVM) => storedFilm.episodeId === film.episodeId)) {
        saveFilmToStore(film);
      }
      setLoading(false);
    });
  }, [filmsUrl]);
  return (
    <FilmsWrapper>
      <FilmsCount>
        {filmsUrl.length} Film{filmsUrl.length > 1 ? 's' : ''}
      </FilmsCount>
      {loading ? (
        <span>Loading films</span>
      ) : films.length ? (
        <ul>
          {films.map((film: IFilmsVM) => (
            <Film key={film.episodeId}>
              {film.title}: {film.yearsAgo} years ago
            </Film>
          ))}
        </ul>
      ) : (
        <span>Information about movies cannot be displayed at this time.</span>
      )}
    </FilmsWrapper>
  );
}
