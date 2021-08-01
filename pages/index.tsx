import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ICharacterVM } from '../components/character/Characters.vm';
import { CharactersList } from '../components/charactersList/CharactersList';
import { ICharactersListVM } from '../components/charactersList/CharactersList.vm';
import { saveCharactersToStore } from '../components/charactersList/services/charactersList.local';
import { getCharacters } from '../components/charactersList/services/charactersList.service';
import { useAppSelector } from '../hooks/store';
import { Layout } from '../layout';
import Custom404 from './404';

export const getServerSideProps: GetServerSideProps = async () => {
  const charactersList: ICharactersListVM = await getCharacters();

  return {
    props: {
      charactersList: charactersList,
    },
  };
};

export default function Home({ charactersList }: { charactersList: ICharactersListVM }) {
  const [characters, setCharacters] = useState(charactersList.characters);

  const [currentCharactersList, setCurrentCharactersList] = useState(charactersList);

  let isCharactersListInStore: boolean = useAppSelector((state) =>
    state.charactersList.value.some(
      (storedCharactersList) => storedCharactersList.charactersList.page === currentCharactersList.page
    )
  );

  useEffect(() => {
    if (!isCharactersListInStore) saveCharactersToStore(currentCharactersList);
  }, [currentCharactersList, isCharactersListInStore]);

  const loadMoreCharacters = async () => {
    if (currentCharactersList.next === 'null' || !currentCharactersList.next.includes('page=')) return;

    let nextPage: string = currentCharactersList.next.substr(currentCharactersList.next.indexOf('page')).substr(0);
    nextPage =
      nextPage
        .substr(0, nextPage.indexOf('&') !== -1 ? nextPage.indexOf('&') : nextPage.length)
        ?.split('=')
        ?.reverse()[0] || '0';

    const charactersList: ICharactersListVM = await getCharacters(parseInt(nextPage));
    setCharacters((prevCharacters: ICharacterVM[]) => {
      return [...prevCharacters, ...charactersList.characters];
    });

    setCurrentCharactersList(charactersList);
  };

  if (!currentCharactersList.total) {
    return <Custom404 />;
  }
  return (
    <Layout home>
      <Head>
        <title>Star Wars Characters</title>
      </Head>
      <CharactersList
        characters={characters}
        totalCharacters={currentCharactersList.total}
        loadMoreCharacters={loadMoreCharacters}
      />
    </Layout>
  );
}
