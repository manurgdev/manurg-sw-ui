import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Layout } from '../../layout';
import { getCharacter } from '../../components/character/services/characters.service';
import { ICharacterVM } from '../../components/character/Characters.vm';
import Link from 'next/link';
import { saveCharacterToStore } from '../../components/character/services/characters.local';
import { useAppSelector } from '../../hooks/store';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const character: ICharacterVM = await getCharacter(parseInt(id as string));

  return {
    props: {
      characterProp: character,
    },
  };
};

export default function Character({ characterProp }: { characterProp: ICharacterVM }) {
  const [character] = useState(characterProp);

  const isCharacterInStore: boolean = useAppSelector((state) =>
    state.characters.value.some((characterInStore) => characterInStore.id === character.id)
  );

  useEffect(() => {
    if (!isCharacterInStore) saveCharacterToStore(character);
  }, [character, isCharacterInStore]);

  return (
    <Layout childTitle={character.name}>
      <Head>
        <title>Star Wars Characters</title>
      </Head>
      {character.id !== 0 ? <div>{character.name}</div> : <div>Nope</div>}
    </Layout>
  );
}
