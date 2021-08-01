import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Layout } from '../../layout';
import { getCharacter } from '../../components/character/services/characters.service';
import { ICharacterVM } from '../../components/character/Characters.vm';
import Link from 'next/link';
import { saveCharacterToStore } from '../../components/character/services/characters.local';

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
  const [character, setCharacter] = useState(characterProp);

  useEffect(() => {
    saveCharacterToStore(character);
  }, [character]);

  return (
    <Layout home>
      <Head>
        <title>Star Wars Characters</title>
      </Head>
      <Link href={'/'} passHref>
        <button type="button">Volver a home</button>
      </Link>
      {character.id !== 0 ? <div>{character.name}</div> : <div>Nope</div>}
    </Layout>
  );
}
