import { rest } from 'msw';

import { FILMS_API_PATH } from '../core/constants'; //'https://swapi.dev/api/films'
import { mockedFilms } from '../__mocks__/mocks';

const handlers = [
    rest.get(FILMS_API_PATH, (_req, res, ctx) => {
        return res(ctx.json(mockedFilms));
    }),
];

export { handlers };