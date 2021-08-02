## Star Wars UI with NextJS

To deploy the app, use the following commands;

```bash
yarn install && yarn build && yarn start
# or
npm install && npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Added dependencies

- Redux (store management)
- NProgress (loading bar)
- Styled Components (CSS in JS)

## Troubles

I've had a lot of problems with jest / ts-jest configuration, making impossible to write tests for the app.

I wasn't able to render a component using testing-library. Always returned the following error:

```
/manurg-sw-ui/components/films/films.test.tsx:7
        var getByText = render_1.render(<Films_1.Films filmsUrl={mocks_1.mockedFilmsUrl}/>).getByText;
                                        ^

    SyntaxError: Unexpected token '<'

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1479:14)
```
